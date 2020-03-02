import {IAppState} from '../state/app.state';
import {createSelector} from 'reselect';
import {IPeopleState} from '../state/people.state';
import IPeople from '../../models/people.model';
import {IGender} from '../../models/shared.model';

const selectPeopleState = (state: IAppState) => state.people;

export const selectTotalCountOfPeople = createSelector(
    selectPeopleState,
    (state: IPeopleState): number | null => {
        if (state.list) {
            return state.list.length
        }

        return null;
    }
);

const selectGender = (_: IAppState, gender: IGender) => gender;

export const selectPeopleByGender = createSelector(
    [selectPeopleState, selectGender],
    (state: IPeopleState, gender: IGender): IPeople.Model[] | null => {
        if (state.list) {
            return state.list.filter(item => item.gender === gender);
        }

        return null;
    }
);