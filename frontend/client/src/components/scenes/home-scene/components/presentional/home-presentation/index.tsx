import * as React from 'react';

import './index.scss';
import BemShaper from '../../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../../bem/bem-class-names';

const bem = new BemShaper(EBemClassNames.homePresentation);

const linksTechnologies = [
    {
        link: 'https://reactjs.org/',
        title: 'React'
    },
    {
        link: 'https://redux.js.org/',
        title: 'Redux'
    },
    {
        link: 'https://redux-saga.js.org/',
        title: 'Redux Saga'
    },
    {
        link: 'https://en.bem.info/',
        title: 'BEM'
    },
    {
        link: 'https://typescriptlang.org/',
        title: 'Typescript'
    },
    {
        link: 'https://webpack.js.org/',
        title: 'Webpack'
    }
];

const HomePresentation = () => {
    return (
        <div className={bem.block}>
            <div className={EBemClassNames.container}>
                <div className={bem.elem('title')}>
                    This template uses:
                </div>

                <div className={bem.elem('list')}>
                    {
                        linksTechnologies.map((item) => {
                            return (
                                <div key={item.link} className={bem.elem('item')}>
                                    <a href={item.link} target={'_blank'} className={bem.elem('link')}>{item.title}</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePresentation;