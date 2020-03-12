import * as React from 'react';

export namespace ITextField {
    export interface BaseProps {
        label: string;

        onChange?(newValue: string, event?: React.ChangeEvent): unknown;

        mods?: string[];
        mixes?: string[];

        externalManage?: boolean;

        error?: string | null;
    }

    export interface TextareaProps extends BaseProps {
        defaultValue?: string;
    }

    export interface InputBaseProps extends BaseProps {
        value?: string;
    }

    export interface InputProps extends InputBaseProps {

    }

    export interface InputPasswordProps extends InputBaseProps {

    }
}