import IFormBuilder from '../form-builder/model';

export enum EValidatorsRules {
    minLength = 'minLength',
    maxLength = 'maxLength',
    match = 'match',
    email = 'email',
    required = 'required'
}

export interface IFormControlError {
    error: boolean;
    prompt: string | null;
}

export enum EFormShowErrors {
    delayed = 'delayed',
    immediately = 'immediately'
}

export enum EFormTypesControl {
    textfield = 'textfield',
    checkbox = 'checkbox'
}

export type IFormRule<T = undefined> = {
    type: EValidatorsRules;
    prompt: string;
} & (T extends undefined ? {} : {
    params: T;
});

export type IFormInitControl<T extends {}, K = undefined> = {
    rules?: IFormRule[];
    typeControl?: EFormTypesControl;
} & (K extends keyof T ? {
    initValue: T[K];
} : {
    initValue: string | boolean;
});

export type IFormInitControls<T> = {
    [K in keyof T]: IFormInitControl<T, K>;
};

export interface IFormControl<T> {
    name: keyof T;
    rules?: IFormRule[];
    typeControl: EFormTypesControl;
    initValue: T[keyof T];
    currentValue: T[keyof T];
    prevValue: T[keyof T];
    error: IFormControlError;
}

export type IFormControls<T extends {}> = {
    [K in keyof T]: IFormControl<T>;
};

export interface IFormInitConfig<T> {
    showErrors?: EFormShowErrors;
    controls: IFormInitControls<T>;
}

export type IFormSerialize<T extends {}> = {
    [K in keyof T]: T[K];
};

export type IForm<T extends {}> = IFormBuilder.Impl<T>;