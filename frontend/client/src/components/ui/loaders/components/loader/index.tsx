import * as React from 'react';
import ILoader from '../../model';
import {EBemClassNames} from '../../../../../bem-class-names';

const Loader = (props: ILoader.Props) => {
    const {mixes = [], mods = []} = props;

    const classNames = [EBemClassNames.loader, ...mods, ...mixes].join(' ').trim();

    return(
        <div className={classNames}>
            <svg className={`${EBemClassNames.loader}__circular`} viewBox='25 25 50 50'>
                <circle className={`${EBemClassNames.loader}__path`} cx='50' cy='50' r='20' fill='none' strokeMiterlimit='10'/>
            </svg>
        </div>
    );
};

export default Loader;