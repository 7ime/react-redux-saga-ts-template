namespace IFormValidators {
    export interface MinLengthParams {
        count: number;
    }

    export interface MaxLengthParams {
        count: number;
    }

    export interface MatchParams {
        withValue: string;
    }
}

export default IFormValidators;