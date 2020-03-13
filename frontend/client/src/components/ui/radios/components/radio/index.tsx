import * as React from 'react';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import BemShaper from '../../../../../bem/bem-shaper';
import {v4 as uuid} from 'uuid';
import {IRadio} from '../../model';

const bem = new BemShaper(EBemClassNames.radio);

const Radio = (props: IRadio.RadioProps) => {
    const {
        mods = [],
        mixes = [],
        disabled,
        checked,
        controlName,
        onChange,
        value,
        label
    } = props;

    const classNames = [
        bem.block,
        bem.mods(mods),
        bem.mixes(mixes),
        checked && bem.is('checked'),
        disabled && bem.is('disabled')
    ].join(' ').trim();

    const uuidRadio = uuid();

    return (
        <div className={classNames}>
            <input type='radio'
                   value={value}
                   name={controlName}
                   onChange={onChange}
                   className={bem.elem('control')}
                   id={uuidRadio}
            />

            <label htmlFor={uuidRadio} className={bem.elem('content')}>

                <div className={bem.elem('pseudo-control')}/>
                <div className={bem.elem('description')}>{label}</div>
            </label>
        </div>
    );
};

export default Radio;