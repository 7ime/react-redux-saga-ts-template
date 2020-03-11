import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Redirect, Route, Switch} from 'react-router-dom';

import './index.scss';
import BemShaper from '../../../bem/bem-shaper';
import {EBemClassNames} from '../../../bem/bem-class-names';
import FormSceneSidebarMenu from './components/containers/form-scene-sidebar-menu';
import FormFirstExample from './components/containers/form-first-example';
import FormSecondExample from './components/containers/form-second-example';
import {IRouter} from '../../../models/router-model';
import {PATH_FORM_SCENE_ROUTES} from './routes';
const bem = new BemShaper(EBemClassNames.formScene);

interface IProps extends IRouter.Props {

}

export default class FormScene extends React.Component<IProps, never> {
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
                                        <Route path={PATH_FORM_SCENE_ROUTES.firstExample} exact component={FormFirstExample}/>
                                        <Route path={PATH_FORM_SCENE_ROUTES.secondExample} exact component={FormSecondExample}/>
                                        <Redirect from='*' to={PATH_FORM_SCENE_ROUTES.firstExample} exact/>
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
