import * as React from 'react';

namespace IButton {
    export type LoaderPosition = 'left' | 'center' | 'right';
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

        onMouseDown?(e: React.MouseEvent): unknown;
        onMouseUp?(e: React.MouseEvent): unknown;
        onClick?(e: React.MouseEvent): unknown;
        onFocus?(e: React.FocusEvent): unknown;
        onBlur?(e: React.FocusEvent): unknown;

        loader?: boolean;
        loaderPosition?: LoaderPosition;

        disabled?: boolean;

        children?: React.ReactChild | React.ReactNode;
    }
}

export default IButton;
