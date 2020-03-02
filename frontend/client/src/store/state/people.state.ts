import {Maybe} from '../../toolbox/custom-types';
import IPeople from '../../models/people.model';

export interface IPeopleState {
    list: Maybe<IPeople.Model[]>;
    isFetchError: boolean;
    human: Maybe<IPeople.Model>;
    isFetchHumanError: boolean;
}

export const initialPeopleState: IPeopleState = {
    list: null,
    isFetchError: false,
    human: null,
    isFetchHumanError: false,
};