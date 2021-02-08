import { lazy } from 'react';

const ListPokemon = lazy(() => import('../components/Pokemon/ListPokemon/listPokemon'));

export const routes = [
    {
        path: '/',
        exact: true,
        component: ListPokemon
    },
    {
        path: '*',
        component: null
    }
]