import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import '@styles/global.scss';

import getAppStore from './store';
import getService from './services';
import {ServiceProvider} from './components/context/service-context';
import HelmetSet from './components/containers/helmet-set';
import App from './components/app';

ReactDOM.render((
    <Provider store={getAppStore()}>
        <ServiceProvider value={getService()}>
            <BrowserRouter>
                <HelmetSet/>
                <App/>
            </BrowserRouter>
        </ServiceProvider>
    </Provider>
), document.getElementById('root'));
