import {combineReducers} from 'redux';
import listMenu from './menu';
import listPokemon from './pokemon';
import detailPokemon from './pokemonDetail';
import listSearchedPokemon from './searchPokemon';

export default combineReducers({
    listMenu,
    listPokemon,
    detailPokemon,
    listSearchedPokemon
})