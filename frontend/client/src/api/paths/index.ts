import {configuration} from '../config';

const base = (rest: string) => `${configuration.remoteApi}/${rest}`;

export default class Paths {
    static People = class {
        static fetchHuman = (id: number) => base(`people/${id}`);
        static fetchPeople = () => base(`people/`);
    };
}
