import {IFetcher} from '../../api/fetcher/model';
import Paths from '../../api/paths';
import {IPeopleService} from './model';
import {injectPropertyFetcher} from '../../injects/injects-fetcher';
import IPeople from '../../models/people.model';

export default class PeopleService implements IPeopleService {

    @injectPropertyFetcher
    private fetcher!: IFetcher;

    fetchHuman = async (id: number): Promise<IPeople.Model> => {
        return this.fetcher.get(Paths.People.FetchHuman(id));
    }

    fetchPeople = async (): Promise<IPeople.Model[]> => {
        const response: {
            results: IPeople.Model[]
        } = await this.fetcher.get(Paths.People.FetchPeople());

        return response.results;
    }
}
