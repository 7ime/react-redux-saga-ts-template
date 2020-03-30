import PeopleService from './index';
import {IPeople} from '../../entities/people.entity';

const instanceService = new PeopleService();

describe('testing peopleService', () => {
    jest.setTimeout(10000);

    const peopleMatcher: IPeople.ModelDTO = {
        name: expect.anything(),
        height: expect.anything(),
        mass: expect.anything(),
        gender: expect.anything(),
        url: expect.anything(),
    };

    it('testing fetchPeople', async() => {
        const response = await instanceService.fetchPeople();

        expect(response).toContainEqual(expect.objectContaining(peopleMatcher));
    });

    it('testing fetchHuman', async() => {
        const response = await instanceService.fetchHuman(1);

        expect(response).toMatchObject(peopleMatcher);
    });
});