import * as React from 'react';
import {Helmet} from 'react-helmet';

const HelmetSet = () => {
    return (
        <Helmet
            link={[
                {
                    rel: 'shortcut icon',
                    type: 'image/x-icon',
                    href: require('../../../shared/images/favicon/apple-icon-60x60.png'),
                    sizes: '60x60'
                }
            ]}
        />
    );
};

export default HelmetSet;
