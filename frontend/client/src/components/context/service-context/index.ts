import * as React from 'react';

import getService from "../../../services";

const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer
} = React.createContext(getService());

export {
    ServiceProvider,
    ServiceConsumer
}
