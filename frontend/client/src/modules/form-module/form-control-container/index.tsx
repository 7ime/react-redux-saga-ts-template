import * as React from 'react';
import {IForm, IFormControlError, IFormExternalManage} from '../shared';

interface IProps<T> {
    form: IForm<T>;
    controlName: keyof T;
    children: React.ReactElement;
}

interface IInjectProps<T> {
    externalManage: IFormExternalManage<T[keyof T]>;
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

    onUpdateValue = (newValue: T[keyof T]) => {
        this.props.form.updateControl(this.props.controlName, newValue);

        this.setState({
            value: newValue
        });
    };

    componentDidUpdate() {
        const control = this.props.form.getControl(this.props.controlName);

        if (control.currentValue !== this.state.value) {
            this.setState({
                value: control.currentValue
            });
        }
    }

    render() {
        const injectProps: IInjectProps<T> = {
            externalManage: {
                value: this.state.value,
                onUpdateValue: this.onUpdateValue
            }
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