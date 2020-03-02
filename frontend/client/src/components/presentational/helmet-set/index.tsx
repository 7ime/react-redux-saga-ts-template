import * as React from 'react';

import './index.scss';
import {Helmet} from 'react-helmet';

// Create favicon in https://www.favicon-generator.org/

export const HelmetSet = () => {
    return (
        <React.Fragment>
            <Helmet
                link={[
                    {
                        rel: 'apple-touch-icon',
                        href: require('../../../shared/images/favicon/apple-icon-57x57.png'),
                        sizes: '57x57'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: require('../../../shared/images/favicon/apple-icon-60x60.png'),
                        sizes: '60x60'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: require('../../../shared/images/favicon/apple-icon-72x72.png'),
                        sizes: '72x72'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: require('../../../shared/images/favicon/apple-icon-76x76.png'),
                        sizes: '76x76'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: require('../../../shared/images/favicon/apple-icon-114x114.png'),
                        sizes: '114x114'
                    }
                ]}
                meta={[
                    {name: 'msapplication-TileColor', content: '#ffffff'},
                    {name: 'msapplication-TileImage', content: '../../../shared/images/favicon/ms-icon-144x144.png'},
                ]}/>
        </React.Fragment>

    );
};
