import * as React from 'react';
import {ELoaderPosition} from '../../../../constants/shared';

namespace IButton {
    export type LoaderPosition = ELoaderPosition;
    export type Target = '_blank' | '_self' | '_parent' | '_top';
    export type TagName = 'button' | 'a';
    export type ButtonType = 'button' | 'submit';

    export interface Props {
        mods?: string[];
        mixes?: string[];
        type?: ButtonType;
        tagName?: TagName;
        target?: Target;
        title?: string;
        href?: string;

        onMouseDown?(event: React.MouseEvent): unknown;
        onMouseUp?(event: React.MouseEvent): unknown;
        onClick?(event: React.MouseEvent): unknown;
        onFocus?(event: React.FocusEvent): unknown;
        onBlur?(event: React.FocusEvent): unknown;

        loader?: boolean;
        loaderPosition?: LoaderPosition;

        disabled?: boolean;

        children?: React.ReactChild | React.ReactNode;
    }
}

export default IButton;
