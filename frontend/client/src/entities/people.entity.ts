export namespace IPeople {
    export interface ModelDTO {
        name: string;
        mass: string;
        gender: 'male' | 'female';
    }

    export interface Model extends ModelDTO {

    }
}