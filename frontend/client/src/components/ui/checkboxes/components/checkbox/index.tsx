import * as React from 'react';
import {ICheckbox} from '../../model';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import BemShaper from '../../../../../bem/bem-shaper';
import {v4 as uuid} from 'uuid';

const bem = new BemShaper(EBemClassNames.checkbox);

interface IState {
    value: boolean;
}

class Checkbox extends React.PureComponent<ICheckbox.Props, IState> {
    state = {
        value: typeof this.props.value === 'boolean' ? this.props.value : false
    };

    static getDerivedStateFromProps(props: ICheckbox.Props, state: IState) {
        if (props.externalManage) {
            return {
                value: props.externalManage.value ? props.externalManage.value : false
            };
        } else {
            return null;
        }
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setValue(event.target.checked);
    }

    private setValue = (newValue: boolean) => {
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
            children,
            mods = [],
            mixes = [],
            disabled,
            error
        } = this.props;

        const {value} = this.state;

        const classNames = [
            bem.block,
            bem.mods(mods),
            bem.mixes(mixes),
            value && bem.is('checked'),
            error && bem.is('error'),
            disabled && bem.is('disabled')
        ].join(' ').trim();

        const uuidCheckbox = uuid();

        return (
            <div className={classNames}>
                <label htmlFor={uuidCheckbox} className={bem.elem('content')}>
                    <input type='checkbox'
                           onChange={this.handleChange}
                           className={bem.elem('control')}
                           checked={value}
                           id={uuidCheckbox}
                    />
                    <div className={bem.elem('pseudo-control')}/>
                    <div className={bem.elem('description')}>{children}</div>
                </label>
                {error && <div className={bem.elem('error-container')}>{error}</div>}
            </div>
        );
    }
}

export default Checkbox;