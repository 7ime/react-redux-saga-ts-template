import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import BemShaper from '../../bem/bem-shaper';
import {EBemClassNames} from '../../bem/bem-class-names';
import LoaderWithInfo from '../presentational/loader-with-info';
import './index.scss';
import Header from '../containers/header';

const HomeScene = React.lazy(() => import('../scenes/home-scene'));
const FormScene = React.lazy(() => import('../scenes/form-scene'));

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
        return(
            <div className={bem.block}>
                <Header mixes={['app']}/>
                <React.Suspense fallback={this.getLoaderElem()}>
                    <Switch>
                        <Route path='/' exact component={HomeScene}/>
                        <Route path='/form' component={FormScene}/>
                        <Redirect from='*' to='/' exact/>
                    </Switch>
                </React.Suspense>
            </div>
        );
    }
}
