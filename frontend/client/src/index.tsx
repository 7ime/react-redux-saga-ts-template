import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import '@styles/global.scss';

import App from './app';
import getAppStore from "./store";
import getService from "./services";
import {ServiceProvider} from "./components/context/service-context";
import {HelmetSet} from "./components/presentational/helmet-set";

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
