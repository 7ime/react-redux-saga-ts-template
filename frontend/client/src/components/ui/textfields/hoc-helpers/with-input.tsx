import * as React from 'react';
import BemShaper from '../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../bem/bem-class-names';
import {ITextField} from '../model';

const bem = new BemShaper(EBemClassNames.textfield);

interface IState {
    isFocused: boolean;
    isBlur: boolean;
    value: string;
}

const withInput = <T extends ITextField.InputBaseProps>(Wrapped: any) => {
    return class extends React.Component<T, IState> {
        controlRef = React.createRef<HTMLInputElement>();

        state = {
            isFocused: false,
            isBlur: true,
            value: typeof this.props.value === 'string' ? this.props.value : ''
        };

        static getDerivedStateFromProps(props: T, state: IState) {
            if (props.externalManage) {
                return {
                    value: props.externalManage.value ? props.externalManage.value : ''
                };
            } else {
                return null;
            }
        }

        handleFocus = () => {
            const textfieldNode = this.controlRef.current;

            if (textfieldNode) {
                textfieldNode.focus();
            }

            this.setState({
                isFocused: true,
                isBlur: false
            });
        };

        handleBlur = () => {
            const textfieldNode = this.controlRef.current;

            let isBlur = true;

            if (textfieldNode && textfieldNode.value) {
                isBlur = false;
            }

            this.setState({
                isBlur,
                isFocused: false
            });
        };

        handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setValue(event.target.value);
        };

        clearValue = () => {
            this.setValue('');
        };

        private setValue = (newValue: string) => {
            if (this.props.externalManage) {
                this.props.externalManage.onUpdateValue(newValue);
            } else {
                this.setState({
                    value: newValue
                });
            }
        }

        render() {
            const {
                label,
                mods = [],
                mixes = [],
                disabled = false,
                error
            } = this.props;

            const {isBlur, isFocused, value} = this.state;

            const injectProps: ITextField.InputInjectPropsBase = {
                isFocused,
                clearValue: this.clearValue,
                innerRef: this.controlRef,
                value: value,
                onChange: this.handleChange,
            };

            const classNames = [
                bem.block,
                bem.mods(mods),
                bem.mixes(mixes),
                isFocused && bem.is('focused'),
                disabled && bem.is('disabled'),
                isBlur && !value && bem.is('blur'),
                error && bem.is('error')
            ].join(' ').trim();

            return (
                <div className={classNames}>
                    <label className={bem.elem('label')}>{label}</label>
                    <div
                        className={
                            [
                                bem.elem('control-wrap'),
                                bem.elem('control-wrap', 'input'),
                            ].join(' ').trim()
                        }
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        tabIndex={0}
                    >
                        <Wrapped {...injectProps}/>
                    </div>
                    {error && <div className={bem.elem('error-container')}>{error}</div>}
                </div>
            );
        }
    };
};

export default withInput;