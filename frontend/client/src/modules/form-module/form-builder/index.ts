import IFormBuilder from './model';
import {
    EFormShowErrors,
    EFormTypesControl, EValidatorsRules,
    IFormAdvancedControl,
    IFormAdvancedControls, IFormControlError,
    IFormInitConfig, IFormRule, IFormSerialize,
} from '../shared';
import FormValidators from '../form-validators';
import IFormValidatorsBuilder from '../form-validators-builder/model';
import IFormValidators from '../form-validators/model';

export default class FormBuilder<T> implements IFormBuilder.Impl<T> {
    private _valid = false;
    private _showErrors = true;
    private _advancedControls: IFormAdvancedControls<T> = {} as any;

    constructor(private initConfig: IFormInitConfig<T>, private additionalParams: IFormBuilder.AdditionalParams<T>) {
        this._init();
    }

    private _init() {
        const {controls} = this.initConfig;

        if (this.initConfig.showErrors === EFormShowErrors.delayed) {
            this.showErrors = false;
        }

        const controlsArr = Object.keys(controls);

        controlsArr.forEach((controlName: string) => {
            const control = (controls as any)[controlName];

            const typeControl = control.typeControl ? control.typeControl : EFormTypesControl.textfield;

            const advancedControl: IFormAdvancedControl<T> = {
                initValue: control.initValue,
                rules: control.rules,
                typeControl,
                currentValue: control.initValue,
                prevValue: control.initValue,
                error: {
                    error: false,
                    prompt: null
                }
            } as any;

            (this._advancedControls as any)[controlName] = advancedControl;
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

    get controls(): IFormAdvancedControls<T> {
        return this._advancedControls;
    }

    get serialize(): IFormSerialize<T> {
        const result: IFormSerialize<T> = {} as any;

        const advancedControlsArr = Object.keys(this._advancedControls);

        advancedControlsArr.forEach((controlName: string) => {
            (result as any)[controlName] = (this._advancedControls as any)[controlName].currentValue;
        });

        return result;
    }

    getControl(controlName: keyof T): IFormAdvancedControl<T> {
        return this._advancedControls[controlName];
    }

    updateControl(controlName: keyof T, value: T[keyof T]): void {
        const {currentValue} = this._advancedControls[controlName];

        this._advancedControls[controlName].currentValue = value;
        this._advancedControls[controlName].prevValue = currentValue;

        this._validateForm();

        this.additionalParams.updateFormCb(this._advancedControls[controlName]);
    }

    private _validateForm() {
        const advancedControlsArr = Object.keys(this._advancedControls);

        let isValid: boolean = true;

        advancedControlsArr.forEach((controlName: string) => {
            const control: IFormAdvancedControl<T> = (this._advancedControls as any)[controlName];

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

            (this._advancedControls as any)[controlName].error = result;
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
                    withValue: (this._advancedControls as any)[matchRule.params.withField].currentValue
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