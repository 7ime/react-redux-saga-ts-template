import {IFormControl, IFormControls, IFormSerialize} from '../shared';

namespace IFormBuilder {
    export declare class Impl<T extends {}> {
        get valid(): boolean;
        get controls(): IFormControls<T>;

        get showErrors(): boolean;
        set showErrors(value: boolean);

        getControl(controlName: keyof T): IFormControl<T>;
        updateControl(controlName: keyof T, value: T[keyof T]): void;

        get serialize(): IFormSerialize<T>;
    }

    export interface AdditionalParams<T> {
        updateFormCb(initiatorControl: IFormControl<T> | null) : void;
    }
}

export default IFormBuilder;