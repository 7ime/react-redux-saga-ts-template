import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import HomeScene from './components/scenes/home-scene';
import HooksScene from './components/scenes/hooks-scene';
import Header from './components/containers/header';
import BemShaper from './bem/bem-shaper';
import {EBemClassNames} from './bem/bem-class-names';

const bem = new BemShaper(EBemClassNames.app);

export default class App extends React.Component {
    render() {
        return(
            <div className={bem.block}>
                <Header mixes={['app']}/>
                <Switch>
                    <Route path='/' exact component={HomeScene}/>
                    <Route path='/hooks' exact component={HooksScene}/>
                    <Redirect from='*' to='/' exact/>
                </Switch>
            </div>
        );
    }
}
