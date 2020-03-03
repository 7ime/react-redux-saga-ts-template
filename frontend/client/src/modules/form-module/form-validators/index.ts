import IFormValidators from './model';

class FormValidators {
    static required(value: string | boolean): boolean {
        if (typeof value === 'string') {
            return (value.trim().length > 0);
        }

        return value;
    }

    static email(value: string): boolean {
        const reg = /^([\w-]+\.)*[\w-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        return !!value.match(reg);
    }

    static minLength(value: string, { count }: IFormValidators.MinLengthParams): boolean {
        return (value.length >= count);
    }

    static maxLength(value: string, { count }: IFormValidators.MaxLengthParams): boolean {
        return (value.length <= count);
    }

    static match(value: string, { withValue }: IFormValidators.MatchParams): boolean {
        return (value === withValue);
    }
}

export default FormValidators;