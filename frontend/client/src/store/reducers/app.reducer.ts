import {IAppState} from '../state/app.state';
import {peopleReducer} from './people.reducer';

export const appReducer = (state: IAppState = {} as IAppState, action: any): IAppState => {
    return {
        people: peopleReducer(state.people, action)
    };
};
