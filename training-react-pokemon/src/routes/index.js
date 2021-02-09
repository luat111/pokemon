import { lazy } from 'react';

const ListPokemon = lazy(() => import('../components/Pokemon/ListPokemon/listPokemon'));
const PokemonDetail = lazy(() => import('../components/Pokemon/PokemonDetail/pokemonDetail'));
export const routes = [
    {
        path: '/',
        exact: true,
        component: ListPokemon
    },
    {
        path: '/pokemon/:id/:name',
        exact: true,
        component: PokemonDetail
    },
    {
        path: '*',
        component: null
    }
]