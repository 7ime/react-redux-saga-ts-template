import * as React from 'react';
import {IMapServicesToProps, withService} from '../../hoc-helpers/with-service';
import {IService} from '../../../services/model';
import {Link } from 'react-router-dom';
import {withRouter, useHistory} from 'react-router';
import * as qs from 'query-string';
import {useSelector} from 'react-redux';
import {selectPeopleByGender} from '../../../store/selectors/people.selectors';
import {IAppState} from '../../../store/state/app.state';

interface IProps {

}

const useCustomHooks = () => {
    const [gender, setGender] = React.useState('male');

    React.useEffect(() => {
        setTimeout(() => {
            setGender('female');
        }, 1000)
    }, []);

    return gender;
};

const Hooks = (props: IProps) => {
    const [count, setCount] = React.useState(0);
    const [status, setStatus] = React.useState(false);

    const peopleByGender = useSelector((state: IAppState) => selectPeopleByGender(state, 'male'));

    const history = useHistory();

    const gender = useCustomHooks();

    React.useEffect(() => {
        setStatus(!status);
        console.log(peopleByGender)
    }, [count]);

    const addedOptionalParametersInUrl = () => {
        const result = qs.parse(history.location.search);
        history.push(`${history.location.pathname}?pageID=${6}`)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br/>
            <div>{status ? 'online' : 'offline'}</div>
            <Link to={'/'}>Return to home page</Link>
            <button onClick={addedOptionalParametersInUrl}>change url</button>
            <div>{gender}</div>
        </div>
    );
};

const mapServicesToProps: IMapServicesToProps = ({ peopleService }: IService) => ({ peopleService });

export default withService(mapServicesToProps)(Hooks);