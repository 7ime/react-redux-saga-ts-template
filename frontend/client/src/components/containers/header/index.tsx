import * as React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import './index.scss';
import BemShaper from '../../../bem/bem-shaper';
import {EBemAllowedClassNames} from '../../../bem/bem-allowed-class-names';
import {IRouter} from '../../../models/router-model';

const bem = new BemShaper(EBemAllowedClassNames.header);

interface IProps extends IRouter.Props {

}

const Header = (props: IProps) => {
    const classNames = [
        bem.block
    ].join(' ').trim();

    return (
        <div className={classNames}>
            <div className='container'>
                <div className={bem.elem('menu')}>
                    <NavLink to={'/'}
                             exact
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Home Page</NavLink>
                    <NavLink to={'/form'}
                             exact
                             activeClassName={bem.is('active')}
                             className={bem.elem('link')}
                    >Form Page</NavLink>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);