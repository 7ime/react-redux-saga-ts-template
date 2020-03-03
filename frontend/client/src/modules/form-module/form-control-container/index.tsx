import * as React from 'react';
import {IForm} from '../shared';

interface IProps {
    form: IForm<any>;
    controlName: string;
    children: any;
}

interface IState {
    value: any;
}

class FormControlContainer extends React.Component<IProps, IState> {
    state = {
        value: this.props.form.getControl(this.props.controlName).initValue
    };

    onChange = (event: React.ChangeEvent) => {
        const newValue = (event.target as any).value;

        this.props.form.updateControl(this.props.controlName, newValue);

        this.setState({
            value: newValue
        });
    };

    render() {
        const passProps: any = {
            value: this.state.value,
            onChange: this.onChange
        };

        const control = this.props.form.getControl(this.props.controlName);
        const showErrors = this.props.form.showErrors;

        if (showErrors) {
            passProps.error = control.error;
        }

        return React.cloneElement(this.props.children, passProps);
    }
}

export default FormControlContainer;