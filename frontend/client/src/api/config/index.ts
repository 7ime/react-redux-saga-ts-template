import {environment} from '../../environment';

export const configuration = Object.freeze(
    {
        remoteApi: environment.production ? '/api/v1' : 'https://swapi.co/api'
    }
);
