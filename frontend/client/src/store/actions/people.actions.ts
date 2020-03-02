import IPeople from '../../models/people.model';

export enum EPeopleActions {
    FetchPeople = '[People] FetchPeople',
    FetchPeopleSuccess = '[People] FetchPeopleSuccess',
    FetchPeopleError = '[People] FetchPeopleError',
    FetchHuman = '[People] FetchHuman',
    FetchHumanSuccess = '[People] FetchHumanSuccess',
    FetchHumanError = '[People] FetchHumanError',
}

export interface IFetchPeopleAction {
    type: EPeopleActions.FetchPeople;
}

export const fetchPeopleAction = (): IFetchPeopleAction => {
    return {
        type: EPeopleActions.FetchPeople
    }
};

export interface IFetchPeopleSuccessAction {
    type: EPeopleActions.FetchPeopleSuccess;
    payload: IPeople.Model[];
}

export const fetchPeopleSuccessAction = (payload: IPeople.Model[]): IFetchPeopleSuccessAction => {
    return {
        type: EPeopleActions.FetchPeopleSuccess,
        payload
    }
};

export interface IFetchPeopleErrorAction {
    type: EPeopleActions.FetchPeopleError;
}

export const fetchPeopleErrorAction = (): IFetchPeopleErrorAction => {
    return {
        type: EPeopleActions.FetchPeopleError
    }
};

type IFetchPeopleActions = IFetchPeopleAction | IFetchPeopleSuccessAction | IFetchPeopleErrorAction;

export interface IFetchHumanAction {
    type: EPeopleActions.FetchHuman;
    payload: number;
}

export const fetchHumanAction = (id: number): IFetchHumanAction => {
    return {
        type: EPeopleActions.FetchHuman,
        payload: id
    }
};

export interface IFetchHumanSuccessAction {
    type: EPeopleActions.FetchHumanSuccess;
    payload: IPeople.Model;
}

export const fetchHumanSuccessAction = (payload: IPeople.Model): IFetchHumanSuccessAction => {
    return {
        type: EPeopleActions.FetchHumanSuccess,
        payload
    }
};

export interface IFetchHumanErrorAction {
    type: EPeopleActions.FetchHumanError;
}

export const fetchHumanErrorAction = (): IFetchHumanErrorAction => {
    return {
        type: EPeopleActions.FetchHumanError
    }
};

type IFetchHumanActions = IFetchHumanAction | IFetchHumanSuccessAction | IFetchHumanErrorAction;

export type IPeopleActions = IFetchPeopleActions | IFetchHumanActions;