import * as React from 'react';
import {Maybe} from '../../../../toolbox/custom-types';

export namespace ITextField {
    export interface BaseProps {
        label: string;

        mods?: string[];
        mixes?: string[];

        externalManage?: {
            onUpdateValue(newValue: string): unknown;
            value: Maybe<string>;
        };

        disabled?: boolean;

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
    
    export interface InputInjectPropsBase {
        innerRef: React.RefObject<HTMLInputElement>;
        value: string;
        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown;
        isFocused: boolean;
        clearValue(): unknown;
    }

    export interface InputInjectProps extends InputInjectPropsBase {

    }

    export interface InputPasswordInjectProps extends InputInjectPropsBase {

    }
}