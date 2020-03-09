import * as React from 'react';
import IButton from '../../model';
import Loader from '../../../loaders/components/loader';
import BemShaper from '../../../../../bem/bem-shaper';
import {EBemAllowedClassNames} from '../../../../../bem/bem-allowed-class-names';

const bem = new BemShaper(EBemAllowedClassNames.button);

const Button = (props: IButton.Props) => {
    const {
        tagName: TagName = 'button',
        loader = false,
        loaderPosition = 'center',
        mods = ['primary'],
        mixes = [],
        disabled = false,
        children,
        ...restProps
    } = props;

    const innerButtonElem = (
        <React.Fragment>
            {children}
            {loader && <Loader/>}
        </React.Fragment>
    );

    const classNames = [
        bem.block,
        bem.mods(mods),
        bem.mixes(mixes),
        disabled && bem.is('disabled'),
        loader && bem.mods(['loader', `loader_${loaderPosition}`])
    ].join(' ').trim();

    return (
        <TagName className={classNames} {...restProps}>
            {innerButtonElem}
        </TagName>
    );
};

export default Button;
