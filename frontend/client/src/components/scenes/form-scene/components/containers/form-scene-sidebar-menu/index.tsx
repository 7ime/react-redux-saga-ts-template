import * as React from 'react';
import './index.scss';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';
import {NavLink} from 'react-router-dom';
import {PATH_FORM_SCENE_ROUTES} from '../../../routes';

const bem = new BemShaper(EBemClassNames.formSceneSidebarMenu);

interface IProps {
    mixes?: string[];
}

const FormSceneSidebarMenu = (props: IProps) => {
    const {
        mixes = []
    } = props;

    const classNames = [
        bem.block,
        bem.mixes(mixes)
    ].join(' ').trim();

    return (
        <div className={classNames}>
            <div className={bem.elem('list')}>
                <NavLink to={PATH_FORM_SCENE_ROUTES.firstExample}
                         exact
                         activeClassName={bem.is('active')}
                         className={bem.elem('link')}
                >Form First Example</NavLink>
                <NavLink to={PATH_FORM_SCENE_ROUTES.secondExample}
                         exact
                         activeClassName={bem.is('active')}
                         className={bem.elem('link')}
                >Form Second Example</NavLink>
            </div>
        </div>
    );
};

export default FormSceneSidebarMenu;