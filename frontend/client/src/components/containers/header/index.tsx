import * as React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import './index.scss';
import BemShaper from '../../../bem/bem-shaper';
import {EBemClassNames} from '../../../bem/bem-class-names';
import {IRouter} from '../../../models/router-model';

const bem = new BemShaper(EBemClassNames.header);

interface IProps extends IRouter.Props {
    mixes?: string[];
}

const Header = (props: IProps) => {
    const {
        mixes = []
    } = props;

    const classNames = [
        bem.block,
        bem.mixes(mixes)
    ].join(' ').trim();

    return (
        <div className={classNames}>
            <div className={EBemClassNames.container}>
                <div className={bem.elem('menu')}>
                    <NavLink to={'/'}
                             exact
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Home Page</NavLink>
                    <NavLink to={'/form'}
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Form Page</NavLink>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);