import * as React from 'react';

import './index.scss';
import FormBuilder from '../../../../../../modules/form-module/form-builder';
import {EFormShowErrors, EFormTypesControl, IFormControl} from '../../../../../../modules/form-module/shared';
import FormValidatorsBuilder from '../../../../../../modules/form-module/form-validators-builder';
import FormContainer from '../../../../../../modules/form-module/form-container';
import FormControlContainer from '../../../../../../modules/form-module/form-control-container';
import Button from '../../../../../ui/buttons/components/button';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';
import Input from '../../../../../ui/textfields/components/input';
import InputPassword from '../../../../../ui/textfields/components/input-password';
import Checkbox from '../../../../../ui/checkboxes/components/checkbox';

const bem = new BemShaper(EBemClassNames.formFirstExample);

interface IProps {
    mixes?: string[];
}

interface IControls {
    username: string;
    password: string;
    repeatPassword: string;
    agree: boolean;
}

class FormFirstExample extends React.Component<IProps, {}> {
    private form = new FormBuilder<IControls>({
        showErrors: EFormShowErrors.immediately,
        controls: {
            username: {
                initValue: 'John Doe',
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            },
            password: {
                initValue: '',
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            },
            repeatPassword: {
                initValue: '',
                rules: [
                    FormValidatorsBuilder.required('This field is required'),
                    FormValidatorsBuilder.match('password', 'This field is not match with PASSWORD')
                ]
            },
            agree: {
                initValue: true,
                typeControl: EFormTypesControl.checkbox,
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            }
        }
    }, {
        updateFormCb: this.updateForm
    });

    updateForm(initiatorControl: IFormControl<IControls> | null): void {
        console.log(initiatorControl);
    }

    onSubmit = (event: React.SyntheticEvent) => {
        console.log(this.form.valid);
        console.log(this.form.serialize);
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
                    <div className={bem.elem('form-title')}>Form Registration</div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'username'}>
                            <Input label={'Username'}/>
                        </FormControlContainer>
                    </div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'password'}>
                            <InputPassword label={'Password'}/>
                        </FormControlContainer>
                    </div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'repeatPassword'}>
                            <InputPassword label={'Repeat password'}/>
                        </FormControlContainer>
                    </div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'agree'}>
                            <Checkbox>
                                I agree with <a href='#'>policies</a>.
                            </Checkbox>
                        </FormControlContainer>
                    </div>

                    <Button type={'submit'}
                            mixes={[bem.block]}
                    >Submit</Button>
                </FormContainer>
            </div>
        );
    }
}

export default FormFirstExample;
