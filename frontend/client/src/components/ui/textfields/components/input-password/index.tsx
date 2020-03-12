import * as React from 'react';
import BemShaper from '../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import withInput from '../../hoc-helpers/with-input';
import {ITextField} from '../../model';

const bem = new BemShaper(EBemClassNames.textfield);

interface IProps {
    innerRef: React.RefObject<HTMLInputElement>;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): unknown;
    isFocused: boolean;
    clearValue(): unknown;
}

enum EIconTypePassword {
    eyeOff = 'eye-off',
    eye = 'eye'
}

interface IState {
    type: string;
    iconTypePassword: EIconTypePassword;
}

class InputPassword extends React.PureComponent<IProps, IState> {
    state = {
        type: 'password',
        iconTypePassword: EIconTypePassword.eyeOff
    };

    handlerChangeType = () => {
        const {type} = this.state;

        let newType = 'password';
        let newIconTypePassword = EIconTypePassword.eyeOff;

        if (type === 'password') {
            newType = 'text';
            newIconTypePassword = EIconTypePassword.eye;
        }

        this.setState({
            type: newType,
            iconTypePassword: newIconTypePassword
        });
    };

    render() {
        const {innerRef, isFocused, clearValue, ...dynamicProps} = this.props;
        const {type, iconTypePassword} = this.state;

        const classNames = [
            bem.elem('control'),
            bem.elem('control', 'input')
        ].join(' ').trim();

        return (
            <React.Fragment>
                <input
                    {...dynamicProps}
                    ref={innerRef}
                    type={type}
                    className={classNames}
                />
                {
                    isFocused && (
                        <div className={bem.elem('triggers')}>
                            < div
                                onMouseDown={this.handlerChangeType}
                                className={[
                                    bem.elem('trigger'),
                                    bem.elem('trigger', iconTypePassword),
                                ].join(' ').trim()}
                            />
                            <div
                                onMouseDown={clearValue}
                                className={[
                                    bem.elem('trigger'),
                                    bem.elem('trigger', 'clear'),
                                ].join(' ').trim()}
                            />
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

export default withInput<ITextField.InputPasswordProps>(InputPassword);