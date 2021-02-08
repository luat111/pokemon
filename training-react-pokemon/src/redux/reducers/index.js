import {combineReducers} from 'redux';
import listMenu from './menu';
import listPokemon from './pokemon';

export default combineReducers({
    listMenu,
    listPokemon
})