import {combineReducers} from 'redux';
import listMenu from './menu';
import listPokemon from './pokemon';
import detailPokemon from './pokemonDetail';

export default combineReducers({
    listMenu,
    listPokemon,
    detailPokemon
})