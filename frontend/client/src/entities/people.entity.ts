import {IGender} from '../models/shared.model';

export namespace IPeople {
    export interface ModelDTO {
        name: string;
        mass: string;
        gender: IGender;
        height: string;
        url: string;
    }

    export interface Model extends ModelDTO {

    }
}