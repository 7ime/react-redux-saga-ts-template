import * as React from 'react';
import {Helmet} from 'react-helmet';
import Hooks from '../../containers/hooks';

export default class HooksScene extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Hooks Page</title>
                </Helmet>
                <div className='hooks-scene-component'>
                    <Hooks/>
                </div>
            </React.Fragment>
        );
    }
}