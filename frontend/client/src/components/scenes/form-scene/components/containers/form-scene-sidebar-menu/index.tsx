import * as React from 'react';
import './index.scss';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';
import {NavLink} from 'react-router-dom';

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
                <NavLink to={'/form/example-1'}
                         exact
                         activeClassName={bem.is('active')}
                         className={bem.elem('link')}
                >Form First Example</NavLink>
                <NavLink to={'/form/example-2'}
                         exact
                         activeClassName={bem.is('active')}
                         className={bem.elem('link')}
                >Form Second Example</NavLink>
            </div>
        </div>
    );
};

export default FormSceneSidebarMenu;