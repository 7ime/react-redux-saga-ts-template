import * as React from 'react';
import {toNumber} from 'lodash';
import './index.scss';
import FormBuilder from '../../../../../../modules/form-module/form-builder';
import {EFormShowErrors, IForm, IFormControl} from '../../../../../../modules/form-module/shared';
import FormValidatorsBuilder from '../../../../../../modules/form-module/form-validators-builder';
import FormContainer from '../../../../../../modules/form-module/form-container';
import FormControlContainer from '../../../../../../modules/form-module/form-control-container';
import Button from '../../../../../ui/buttons/components/button';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';
import Input from '../../../../../ui/textfields/components/input';
import {isNumber} from '../../../../../../helpers/is-number';
import {delay} from '../../../../../../helpers/delay';
import {ELoaderPosition} from '../../../../../../constants/shared';

const bem = new BemShaper(EBemClassNames.formThirdExample);

interface IState {
    isDisabledSubmit: boolean;
    isSending: boolean;
}

interface IProps {
    mixes?: string[];
}

interface IControls {
    sum: '';
    firstValue: string;
    secondValue: string;
}

class FormThirdExample extends React.Component<IProps, IState> {
    state = {
        isDisabledSubmit: true,
        isSending: false
    };

    form: IForm<IControls> = new FormBuilder<IControls>({
        showErrors: EFormShowErrors.immediately,
        controls: {
            sum: {
                initValue: ''
            },
            firstValue: {
                initValue: '',
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            },
            secondValue: {
                initValue: '',
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            },
        }
    }, {
        updateFormCb: this.updateForm.bind(this)
    });

    updateForm(initiatorControl: IFormControl<IControls> | null): void {
        if (initiatorControl && (initiatorControl.name === 'firstValue' || initiatorControl.name === 'secondValue')) {
            const {firstValue, secondValue} = this.form.controls;

            if (isNumber(firstValue.currentValue) && isNumber(secondValue.currentValue)) {
                const sum = toNumber(firstValue.currentValue) + toNumber(secondValue.currentValue);

                this.form.patchValue({
                    sum: sum as any
                }, {emit: false});
            } else {
                this.form.patchValue({
                    sum: ''
                }, {emit: false});
            }
        }

        if (this.form && this.form.valid && this.state.isDisabledSubmit) {
            this.setState({
                isDisabledSubmit: false
            });
        } else if (this.form && !this.form.valid && !this.state.isDisabledSubmit) {
            this.setState({
                isDisabledSubmit: true
            });
        }
    }

    onSubmit = async(event: React.SyntheticEvent) => {
        this.setState({
            isSending: true
        });

        await delay(2000);

        this.setState({
            isSending: false
        });
    }

    render() {
        const {
            mixes = []
        } = this.props;

        const classNames = [
            bem.block,
            bem.mixes(mixes)
        ].join(' ').trim();

        return (
            <div className={classNames}>
                <FormContainer form={this.form} onSubmit={this.onSubmit} className={bem.elem('form')}>
                    <div className={bem.elem('form-title')}>Calc sum for two values</div>

                    <div className={bem.elem('form-controls')}>
                        <div className={bem.elem('form-control')}>
                            <FormControlContainer form={this.form} controlName={'sum'}>
                                <Input label={'Sum'} disabled/>
                            </FormControlContainer>
                        </div>
                    </div>

                    <div className={bem.elem('form-controls')}>
                        <div className={bem.elem('form-control')}>
                            <FormControlContainer form={this.form} controlName={'firstValue'}>
                                <Input label={'First value'}/>
                            </FormControlContainer>
                        </div>

                        <div className={bem.elem('form-control')}>
                            <FormControlContainer form={this.form} controlName={'secondValue'}>
                                <Input label={'Second Value'}/>
                            </FormControlContainer>
                        </div>
                    </div>

                    <Button type={'submit'}
                            mixes={[bem.block]}
                            disabled={this.state.isDisabledSubmit}
                            loader={this.state.isSending}
                            loaderPosition={ELoaderPosition.left}
                    >Send</Button>
                </FormContainer>
            </div>
        );
    }
}

export default FormThirdExample;
