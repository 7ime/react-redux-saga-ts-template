import * as React from 'react';

import './index.scss';
import FormBuilder from '../../../../../../modules/form-module/form-builder';
import {EFormShowErrors, IFormControl} from '../../../../../../modules/form-module/shared';
import FormValidatorsBuilder from '../../../../../../modules/form-module/form-validators-builder';
import FormContainer from '../../../../../../modules/form-module/form-container';
import FormControlContainer from '../../../../../../modules/form-module/form-control-container';
import Button from '../../../../../ui/buttons/components/button';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';
import Input from '../../../../../ui/textfields/components/input';
import Textarea from '../../../../../ui/textfields/components/textarea';

const bem = new BemShaper(EBemClassNames.formSecondExample);

interface IProps {
    mixes?: string[];
}

interface IControls {
    username: string;
    email: string;
    description: string;
}

class FormSecondExample extends React.Component<IProps, {}> {
    private form = new FormBuilder<IControls>({
        showErrors: EFormShowErrors.immediately,
        controls: {
            username: {
                initValue: 'John Doe',
                rules: [
                    FormValidatorsBuilder.required('This field is required')
                ]
            },
            email: {
                initValue: '',
                rules: [
                    FormValidatorsBuilder.required('This field is required'),
                    FormValidatorsBuilder.email('Enter right email'),
                ]
            },
            description: {
                initValue: '',
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
                    <div className={bem.elem('form-title')}>User info</div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'username'}>
                            <Input label={'Username'}/>
                        </FormControlContainer>
                    </div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'email'}>
                            <Input label={'Email'}/>
                        </FormControlContainer>
                    </div>

                    <div className={bem.elem('form-control')}>
                        <FormControlContainer form={this.form} controlName={'description'}>
                            <Textarea label={'Description'}/>
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

export default FormSecondExample;
