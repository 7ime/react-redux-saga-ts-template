import {initialPeopleState, IPeopleState} from '../state/people.state';
import {EPeopleActions, IPeopleActions} from '../actions/people.actions';

export const peopleReducer = (state: IPeopleState = initialPeopleState, action: IPeopleActions): IPeopleState => {
    switch (action.type) {
        case EPeopleActions.FetchPeopleSuccess: {
            return {
                ...state,
                isFetchError: false,
                list: action.payload
            };
        }
        case EPeopleActions.FetchPeopleError: {
            return {
                ...state,
                isFetchError: true
            };
        }
        case EPeopleActions.FetchHumanSuccess: {
            return {
                ...state,
                human: action.payload,
                isFetchHumanError: false
            };
        }
        case EPeopleActions.FetchHumanError: {
            return {
                ...state,
                isFetchHumanError: true
            };
        }
        default:
            return state;
    }
}