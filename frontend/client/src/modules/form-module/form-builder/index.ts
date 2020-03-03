import IFormBuilder from './model';
import {
    EFormShowErrors,
    EFormTypesControl, EValidatorsRules,
    IFormControls,
    IFormControl, IFormControlError,
    IFormInitConfig, IFormRule, IFormSerialize, IForm,
} from '../shared';
import FormValidators from '../form-validators';
import IFormValidatorsBuilder from '../form-validators-builder/model';
import IFormValidators from '../form-validators/model';

export default class FormBuilder<T> implements IFormBuilder.Impl<T> {
    private _valid = false;
    private _showErrors = true;
    private _controls: IFormControls<T> = {} as any;

    constructor(private initConfig: IFormInitConfig<T>, private additionalParams: IFormBuilder.AdditionalParams<T>) {
        this._init();
    }

    private _init() {
        const {controls: initControls} = this.initConfig;

        if (this.initConfig.showErrors === EFormShowErrors.delayed) {
            this.showErrors = false;
        }

        const initControlsArr = Object.keys(initControls);

        initControlsArr.forEach((controlName: string) => {
            const initControl = (initControls as any)[controlName];

            const typeControl = initControl.typeControl ? initControl.typeControl : EFormTypesControl.textfield;

            const control: IFormControl<T> = {
                name: controlName,
                initValue: initControl.initValue,
                rules: initControl.rules,
                typeControl,
                currentValue: initControl.initValue,
                prevValue: initControl.initValue,
                error: {
                    error: false,
                    prompt: null
                }
            } as any;

            (this._controls as any)[controlName] = control;
        });

        this._validateForm();

        this.additionalParams.updateFormCb(null);
    }

    get valid() {
        return this._valid;
    }

    set valid(value: boolean) {
        this._valid = value;
    }

    get showErrors(): boolean {
        return this._showErrors;
    }

    set showErrors(value: boolean) {
        this._showErrors = value;
    }

    get controls(): IFormControls<T> {
        return this._controls;
    }

    get serialize(): IFormSerialize<T> {
        const result: IFormSerialize<T> = {} as any;

        const controlsArr = Object.keys(this._controls);

        controlsArr.forEach((controlName: string) => {
            (result as any)[controlName] = (this._controls as any)[controlName].currentValue;
        });

        return result;
    }

    getControl(controlName: keyof T): IFormControl<T> {
        return this._controls[controlName];
    }

    updateControl(controlName: keyof T, value: T[keyof T]): void {
        const {currentValue} = this._controls[controlName];

        this._controls[controlName].currentValue = value;
        this._controls[controlName].prevValue = currentValue;

        this._validateForm();

        this.additionalParams.updateFormCb(this._controls[controlName]);
    }

    private _validateForm() {
        const controlsArr = Object.keys(this._controls);

        let isValid: boolean = true;

        controlsArr.forEach((controlName: string) => {
            const control: IFormControl<T> = (this._controls as any)[controlName];

            const result: IFormControlError = {
                error: false,
                prompt: null
            };

            control.rules && control.rules.some((rule: IFormRule) => {
                const checkRuleResult = this._checkRule(rule, control.currentValue);

                if (!checkRuleResult) {
                    result.error = true;
                    result.prompt = rule.prompt;

                    isValid = false;

                    return true;
                }

                return false;
            });

            (this._controls as any)[controlName].error = result;
        });

        this.valid = isValid;
    }

    private _checkRule(rule: IFormRule, value: any): boolean {
        switch (rule.type) {
            case EValidatorsRules.email: {
                return FormValidators.email(value);
            }
            case EValidatorsRules.match: {
                const matchRule: IFormRule<IFormValidatorsBuilder.MatchParams> = rule as any;

                return FormValidators.match(value, {
                    withValue: (this._controls as any)[matchRule.params.withField].currentValue
                });
            }
            case EValidatorsRules.maxLength: {
                const maxLengthRule: IFormRule<IFormValidators.MaxLengthParams> = rule as any;

                return FormValidators.maxLength(value, {
                    count: maxLengthRule.params.count
                });
            }
            case EValidatorsRules.minLength: {
                const minLengthRule: IFormRule<IFormValidators.MinLengthParams> = rule as any;

                return FormValidators.minLength(value, {
                    count: minLengthRule.params.count
                });
            }
            case EValidatorsRules.required: {
                return FormValidators.required(value);
            }
        }
    }
}