import * as React from 'react';

import './index.scss';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';

const bem = new BemShaper(EBemClassNames.homePresentation);

const HomePresentation = () => {
    return (
        <div className={bem.block}>
            <div className={EBemClassNames.container}>
                <div className={bem.elem('title')}>
                    This template uses:
                </div>

                <div className={bem.elem('list')}>
                    <div className={bem.elem('item')}>
                        <a href='https://reactjs.org/' className={bem.elem('link')}>React</a>
                    </div>
                    <div className={bem.elem('item')}>
                        <a href='https://redux.js.org/' className={bem.elem('link')}>Redux</a>
                    </div>
                    <div className={bem.elem('item')}>
                        <a href='https://redux-saga.js.org/' className={bem.elem('link')}>Redux Saga</a>
                    </div>
                    <div className={bem.elem('item')}>
                        <a href='https://en.bem.info/' className={bem.elem('link')}>BEM</a>
                    </div>
                    <div className={bem.elem('item')}>
                        <a href='https://www.typescriptlang.org/' className={bem.elem('link')}>Typescript</a>
                    </div>
                    <div className={bem.elem('item')}>
                        <a href='https://webpack.js.org/' className={bem.elem('link')}>Webpack</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePresentation;