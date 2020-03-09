import * as React from 'react';
import ILoader from '../../model';
import {EBemAllowedClassNames} from '../../../../../bem/bem-allowed-class-names';
import BemShaper from '../../../../../bem/bem-shaper';

const bem = new BemShaper(EBemAllowedClassNames.loader);

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