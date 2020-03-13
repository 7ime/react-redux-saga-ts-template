import * as React from 'react';
import {IFormExternalManage} from '../../../../modules/form-module/shared';

export namespace IRadio {
    export interface RadioProps {
        checked?: boolean;
        disabled?: boolean;
        mods?: string[];
        mixes?: string[];
        label: string;
        controlName: string;
        value: string;
        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown;
    }

    export interface RadioGroupProps {
        mods?: string[];
        mixes?: string[];
        externalManage?: IFormExternalManage<string>;
        error?: string | null;
        values: RadioGroupValue[];
        defaultValue?: string;
        defaultChecked?: boolean;
        controlName: string;
    }

    export type RadioGroupValue<T = undefined> = {
        disabled?: boolean;
        label: string;
    } & (T extends undefined ? {
        value: string;
    } : {
        value: T;
    });
}