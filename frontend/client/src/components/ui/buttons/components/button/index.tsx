import * as React from 'react';
import IButton from '../../model';
import Loader from '../../../loaders/components/loader';
import BemShaper from '../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import {ELoaderPosition} from '../../../../../constants/shared';

const bem = new BemShaper(EBemClassNames.button);

const Button = (props: IButton.Props) => {
    const {
        tagName: TagName = 'button',
        loader,
        loaderPosition = ELoaderPosition.center,
        mods = ['primary'],
        mixes = [],
        disabled,
        children,
        ...restProps
    } = props;

    const classNames = [
        bem.block,
        bem.mods(mods),
        bem.mixes(mixes),
        disabled && bem.is('disabled'),
        loader && bem.mods(['loader', `loader_${loaderPosition}`])
    ].join(' ').trim();

    return (
        <TagName className={classNames} {...restProps}>
            {children}
            {loader && <Loader/>}
        </TagName>
    );
};

export default Button;
