import IPeople from '../../models/people.model';

export interface IPeopleService {
    fetchHuman(id: number): Promise<IPeople.Model>;
    fetchPeople(): Promise<IPeople.Model[]>;
}
