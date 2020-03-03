import * as React from 'react';
import {IForm} from '../shared';

interface IProps<T> {
    form: IForm<T>;
    children: React.ReactNode;
    onSubmit(event: React.SyntheticEvent): void;
    className?: string;
}

class FormContainer<T> extends React.PureComponent<IProps<T>, {}> {

    onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        this.props.form.onSubmit();

        this.props.onSubmit(event);
    };

    render() {
        const {
            className
        } = this.props;

        return (
            <form onSubmit={this.onSubmit} className={className}>
                {this.props.children}
            </form>
        );
    }
}

export default FormContainer;