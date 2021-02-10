import { lazy } from 'react';

const ListPokemon = lazy(() => import('../components/Pokemon/ListPokemon/listPokemon'));
const PokemonDetail = lazy(() => import('../components/Pokemon/PokemonDetail/pokemonDetail'));
const SearchPokemon = lazy(() => import('../components/Pokemon/ListSearchedPokemon/listSearchedPokemon'));
export const routes = [
    {
        path: '/pokemon',
        exact: true,
        component: ListPokemon
    },
    {
        path: '/pokemon/:id/:name',
        exact: true,
        component: PokemonDetail
    },
    {
        path: '/list-by/:type/:idType',
        exact: true,
        component: SearchPokemon
    },
    {
        path: '*',
        component: null
    }
]