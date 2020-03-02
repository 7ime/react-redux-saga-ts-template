import * as React from 'react';
import {connect} from 'react-redux';

import './index.scss';
import {Dispatch} from 'redux';
import {IAppState} from '../../../store/state/app.state';
import {fetchHumanAction, fetchPeopleAction} from '../../../store/actions/people.actions';
import {IPeopleState} from '../../../store/state/people.state';
import {selectPeopleByGender, selectTotalCountOfPeople} from '../../../store/selectors/people.selectors';
import IPeople from '../../../models/people.model';

interface IProps {
    people: IPeopleState;
    peopleByGender: IPeople.Model[] | null;
    totalCountOfPeople: number | null;
    dispatch: Dispatch
}

class SwapiInfo extends React.Component<IProps, {}> {
    componentDidMount() {
        this.props.dispatch(fetchPeopleAction());
        this.props.dispatch(fetchHumanAction(5))
    }

    render() {
        const {peopleByGender, people: {human}} = this.props;

        if (peopleByGender && human) {
            return peopleByGender.map(({name, mass}: IPeople.Model, index) => {
                return (
                    <React.Fragment key={index}>
                        <div>{human.name}</div>
                        <div className='swapi-info-component'>{name} - {mass}: {this.props.totalCountOfPeople}</div>
                    </React.Fragment>
                )
            });
        }

        return (
            <div className='swapi-info-component'>Loading...</div>
        )
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        people: state.people,
        totalCountOfPeople: selectTotalCountOfPeople(state),
        peopleByGender: selectPeopleByGender(state, 'male')
    }
};

export default connect(mapStateToProps)(SwapiInfo);
