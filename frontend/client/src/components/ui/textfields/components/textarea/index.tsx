import * as React from 'react';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import BemShaper from '../../../../../bem/bem-shaper';
import {ITextField} from '../../model';

const bem = new BemShaper(EBemClassNames.textfield);

interface IState {
    isFocused: boolean;
    isBlur: boolean;
    value: string;
}

class Textarea extends React.Component<ITextField.TextareaProps, IState> {
    controlRef = React.createRef<HTMLTextAreaElement>();

    state = {
        isFocused: false,
        isBlur: true,
        value: typeof this.props.defaultValue === 'string' ? this.props.defaultValue : ''
    };

    static getDerivedStateFromProps(props: ITextField.TextareaProps, state: IState) {
        if (props.externalManage) {
            return {
                value: props.externalManage.value
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

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setValue(event.target.value);
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
            error
        } = this.props;

        const {isBlur, isFocused, value} = this.state;

        const classNames = [
            bem.block,
            bem.mods(mods),
            bem.mixes(mixes),
            isFocused && bem.is('focused'),
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
                    <textarea
                        ref={this.controlRef}
                        className={[
                            bem.elem('control'),
                            bem.elem('control', 'textarea'),
                            EBemClassNames.scrollbar
                        ].join(' ').trim()}
                        onChange={this.handleChange}
                        value={value}
                    />
                </div>
                {error && <div className={bem.elem('error-container')}>{error}</div>}
            </div>
        );
    }
}

export default Textarea;