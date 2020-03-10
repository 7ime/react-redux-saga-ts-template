import {IGender} from '../models/shared.model';

export namespace IPeople {
    export interface ModelDTO {
        name: string;
        mass: string;
        gender: IGender;
    }

    export interface Model extends ModelDTO {

    }
}