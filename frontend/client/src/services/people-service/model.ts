import {IPeople} from '../../entities/people.entity';

export interface IPeopleService {
    fetchHuman(id: number): Promise<IPeople.Model>;
    fetchPeople(): Promise<IPeople.Model[]>;
}
