import * as React from 'react';
import {IFormExternalManage} from '../../../../modules/form-module/shared';

export namespace ICheckbox {
    export interface Props {
        children: React.ReactChild | React.ReactNode;
        mods?: string[];
        mixes?: string[];

        disabled?: boolean;
        value?: string;
        error?: string | null;

        externalManage?: IFormExternalManage<boolean>;
    }
}