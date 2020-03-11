import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import BemShaper from '../../bem/bem-shaper';
import {EBemClassNames} from '../../bem/bem-class-names';
import LoaderWithInfo from '../presentational/loader-with-info';
import './index.scss';
import Header from '../containers/header';
import {INavigationRoute, rootRoutes} from '../../navigation/routes';

const bem = new BemShaper(EBemClassNames.app);

export default class App extends React.Component {

    private getLoaderElem() {
        return (
            <div className={bem.elem('loader-with-info-wrap')}>
                <LoaderWithInfo
                    title={'Loading...'}
                    description={'Wait please when all data will be loaded'}
                    mixes={[bem.block]}
                />
            </div>
        );
    }

    render() {
        const isLogged = true;

        return(
            <div className={bem.block}>
                <Header mixes={['app']}/>
                <React.Suspense fallback={this.getLoaderElem()}>
                    <Switch>
                        {rootRoutes.map((route: INavigationRoute) => {
                            const {
                                component,
                                path,
                                exact,
                                checkAuth = false
                            } = route;

                            if (!checkAuth || checkAuth && isLogged) {
                                return (
                                    <Route key={path} path={path} exact={exact} component={component}/>
                                );
                            }

                            return null;
                        })}
                        <Redirect from='*' to='/' exact/>
                    </Switch>
                </React.Suspense>
            </div>
        );
    }
}
