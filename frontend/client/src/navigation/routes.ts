import * as React from 'react';

const HomeScene = React.lazy(() => import('../components/scenes/home-scene'));
const FormScene = React.lazy(() => import('../components/scenes/form-scene'));

export const PATHS_ROOT_ROUTES = {
    homeScene: '/',
    formScene: '/form'
};

export interface INavigationRoute {
    exact?: boolean;
    path: string;
    component: React.LazyExoticComponent<any>;
    checkAuth?: boolean;
}

export const rootRoutes: INavigationRoute[] = [
    {
        path: PATHS_ROOT_ROUTES.homeScene,
        exact: true,
        component: HomeScene
    },
    {
        path: PATHS_ROOT_ROUTES.formScene,
        component: FormScene
    }
];