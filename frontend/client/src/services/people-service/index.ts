import {IFetcher} from '../../api/fetcher/model';
import Paths from '../../api/paths';
import {IPeopleService} from './model';
import {injectPropertyFetcher} from '../../injects/injects-fetcher';
import {IPeople} from '../../entities/people.entity';

export default class PeopleService implements IPeopleService {

    @injectPropertyFetcher
    private fetcher!: IFetcher;

    fetchHuman = async (id: number): Promise<IPeople.Model> => {
        return this.fetcher.get(Paths.People.fetchHuman(id));
    }

    fetchPeople = async (): Promise<IPeople.Model[]> => {
        const response: {
            results: IPeople.Model[]
        } = await this.fetcher.get(Paths.People.fetchPeople());

        return response.results;
    }
}
