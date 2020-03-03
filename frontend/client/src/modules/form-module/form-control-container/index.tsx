import * as React from 'react';
import {IForm, IFormControlError} from '../shared';

interface IProps<T> {
    form: IForm<T>;
    controlName: keyof T;
    children: React.ReactElement;
}

interface IInjectProps<T> {
    value: T[keyof T];
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    error?: IFormControlError;
}

interface IState<T> {
    value: T[keyof T];
}

class FormControlContainer<T> extends React.PureComponent<IProps<T>, IState<T>> {
    state = {
        value: this.props.form.getControl(this.props.controlName).initValue
    };

    constructor(props: IProps<T>) {
        super(props);

        this.props.form.bindForceUpdateComponentWithControl(this.props.controlName, this.forceUpdate.bind(this));
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: T[keyof T] = event.target.value as any;

        this.props.form.updateControl(this.props.controlName, newValue);

        this.setState({
            value: newValue
        });
    };

    render() {
        const injectProps: IInjectProps<T> = {
            value: this.state.value,
            onChange: this.onChange
        };

        const control = this.props.form.getControl(this.props.controlName);
        const showErrors = this.props.form.showErrors;

        if (showErrors && control.rules && control.rules.length) {
            injectProps.error = control.error;
        }

        return React.cloneElement(this.props.children, injectProps);
    }
}

export default FormControlContainer;