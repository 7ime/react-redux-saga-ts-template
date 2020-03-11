import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Redirect, Route, Switch} from 'react-router-dom';

import './index.scss';
import BemShaper from '../../../bem/bem-shaper';
import {EBemClassNames} from '../../../bem/bem-class-names';
import FormSceneSidebarMenu from './components/containers/form-scene-sidebar-menu';
import FormFirstExample from './components/containers/form-first-example';
import FormSecondExample from './components/containers/form-second-example';

const bem = new BemShaper(EBemClassNames.formScene);

export default class FormScene extends React.Component {
    componentWillUnmount(): void {
        console.log('will unmount');
    }

    render() {
        const classNames = [
            EBemClassNames.scene,
            bem.block
        ].join(' ').trim();

        return (
            <React.Fragment>
                <Helmet>
                    <title>Form Page</title>
                </Helmet>
                <div className={classNames}>
                    <div className={EBemClassNames.container}>
                        <div className={bem.elem('content-wrap')}>
                            <div className={bem.elem('sidebar')}>
                                <FormSceneSidebarMenu mixes={[bem.block]}/>
                            </div>
                            <div className={bem.elem('content')}>
                                <div className={bem.elem('sub-scene')}>
                                    <Switch>
                                        <Route path='/form/example-1' exact component={FormFirstExample}/>
                                        <Route path='/form/example-2' exact component={FormSecondExample}/>
                                        <Redirect from='*' to='/form/example-1' exact/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
