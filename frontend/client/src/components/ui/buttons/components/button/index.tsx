import * as React from 'react';
import IButton from '../../model';
import Loader from '../../../loaders/components/loader';
import {EBemClassNames} from '../../../../../bem-class-names';

const Button = (props: IButton.Props) => {
    const {
        tagName: TagName = 'button',
        loader = false,
        loaderPosition = 'center',
        mods = [`${EBemClassNames.button}_primary`],
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

    const classNamesBasedProps = [
        disabled ? 'is_disabled' : '',
        loader ? `${EBemClassNames.button}_loader ${EBemClassNames.button}_loader_` + loaderPosition : ''
    ];

    const classNames = [EBemClassNames.button, ...classNamesBasedProps, ...mods, ...mixes].join(' ').trim();

    return (
        <TagName className={classNames} {...restProps}>
            {innerButtonElem}
        </TagName>
    );
};

export default Button;
