import * as React from 'react';
import {connect} from 'react-redux';

import './index.scss';
import {Dispatch} from 'redux';
import {IAppState} from '../../../store/state/app.state';
import {fetchHumanAction, fetchPeopleAction} from '../../../store/actions/people.actions';
import {IPeopleState} from '../../../store/state/people.state';
import {selectPeopleByGender, selectTotalCountOfPeople} from '../../../store/selectors/people.selectors';
import IPeople from '../../../models/people.model';
import {EFormShowErrors, IFormControl} from '../../../modules/form-module/shared';
import FormBuilder from '../../../modules/form-module/form-builder';
import FormValidatorsBuilder from '../../../modules/form-module/form-validators-builder';
import FormControlContainer from '../../../modules/form-module/form-control-container';
import TextField from '../../ui/textfield';
import FormContainer from '../../../modules/form-module/form-container';

interface IProps {
    people: IPeopleState;
    peopleByGender: IPeople.Model[] | null;
    totalCountOfPeople: number | null;
    dispatch: Dispatch;
}

interface IControls {
    username: string;
    password: string;
    repeatPassword: string;
}

class SwapiInfo extends React.Component<IProps, {}> {
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
            }
        }
    }, {
        updateFormCb: this.updateForm
    });

    updateForm(initiatorControl: IFormControl<IControls> | null): void {
        console.log(initiatorControl);
    }

    componentDidMount() {
        this.props.dispatch(fetchPeopleAction());
        this.props.dispatch(fetchHumanAction(5));
    }

    onSubmit = (event: any) => {
        event.preventDefault();

        console.log(this.form.valid);
        console.log(this.form.serialize);
    }

    render() {
        return (
            <div className='swapi-info-component'>
                <FormContainer form={this.form} onSubmit={this.onSubmit} className={'form'}>
                    <div className={'form-control'}>
                        <FormControlContainer form={this.form} controlName={'username'}>
                            <TextField/>
                        </FormControlContainer>
                    </div>

                    <div className={'form-control'}>
                        <FormControlContainer form={this.form} controlName={'password'}>
                            <TextField/>
                        </FormControlContainer>
                    </div>

                    <div className={'form-control'}>
                        <FormControlContainer form={this.form} controlName={'repeatPassword'}>
                            <TextField/>
                        </FormControlContainer>
                    </div>

                    <button type={'submit'}>Submit</button>
                </FormContainer>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        people: state.people,
        totalCountOfPeople: selectTotalCountOfPeople(state),
        peopleByGender: selectPeopleByGender(state, 'male')
    };
};

export default connect(mapStateToProps)(SwapiInfo);
