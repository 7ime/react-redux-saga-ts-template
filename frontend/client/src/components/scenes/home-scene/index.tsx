import * as React from 'react';
import {Helmet} from 'react-helmet';

import './index.scss';
import BemShaper from '../../../bem/bem-shaper';
import {EBemAllowedClassNames} from '../../../bem/bem-allowed-class-names';
import HomePresentation from './components/presentional/home-presentation';

const bem = new BemShaper(EBemAllowedClassNames.homeScene);

export default class HomeScene extends React.Component {

    render() {
        const classNames = [
            EBemAllowedClassNames.scene,
            bem.block
        ].join(' ').trim();

        return (
            <React.Fragment>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <div className={classNames}>
                    <HomePresentation/>
                </div>
            </React.Fragment>
        );
    }
}
