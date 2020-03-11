import * as React from 'react';
import ILoader from '../../model';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import BemShaper from '../../../../../bem/bem-shaper';

const bem = new BemShaper(EBemClassNames.loader);

const Loader = (props: ILoader.Props) => {
    const {mixes = [], mods = []} = props;

    const classNames = [
        bem.block,
        bem.mods(mods),
        bem.mixes(mixes)
    ].join(' ').trim();

    return(
        <div className={classNames}>
            <svg className={bem.elem('circular')} viewBox='25 25 50 50'>
                <circle className={bem.elem('path')} cx='50' cy='50' r='20' fill='none' strokeMiterlimit='10'/>
            </svg>
        </div>
    );
};

export default Loader;