import * as React from 'react';
import {IForm} from '../shared';

interface IProps<T> {
    form: IForm<T>;
    controlName: keyof T;
    children: any;
}

interface IState<T> {
    value: T[keyof T];
}

class FormControlContainer<T> extends React.Component<IProps<T>, IState<T>> {
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

        if (showErrors && control.rules && control.rules.length) {
            passProps.error = control.error;
        }

        return React.cloneElement(this.props.children, passProps);
    }
}

export default FormControlContainer;