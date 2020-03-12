import {IFormControl, IFormControls, IFormPatchValueConfig, IFormSerialize} from '../shared';

namespace IFormBuilder {
    export declare class Impl<T extends {}> {
        get valid(): boolean;
        set valid(value: boolean);

        get controls(): IFormControls<T>;
        get serialize(): IFormSerialize<T>;

        get showErrors(): boolean;
        set showErrors(value: boolean);

        getControl(controlName: keyof T): IFormControl<T>;
        updateControl(controlName: keyof T, value: T[keyof T]): void;
        clearErrorsForControl(controlName: keyof T): void;

        bindForceUpdateComponentWithControl(controlName: keyof T, cb: () => void): void;

        patchValue(values: Partial<T>, config?: IFormPatchValueConfig): void;

        onSubmit(): void;
    }

    export interface AdditionalParams<T> {
        updateFormCb(initiatorControl: IFormControl<T> | null) : void;
    }
}

export default IFormBuilder;