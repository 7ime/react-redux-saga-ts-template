import {IFormAdvancedControl, IFormAdvancedControls, IFormSerialize} from '../shared';

namespace IFormBuilder {
    export declare class Impl<T extends {}> {
        get valid(): boolean;
        get controls(): IFormAdvancedControls<T>;

        get showErrors(): boolean;
        set showErrors(value: boolean);

        getControl(controlName: keyof T): IFormAdvancedControl<T>;
        updateControl(controlName: keyof T, value: T[keyof T]): void;

        get serialize(): IFormSerialize<T>;
    }

    export interface AdditionalParams<T> {
        updateFormCb(initiatorControl: IFormAdvancedControl<T> | null) : void;
    }
}

export default IFormBuilder;