import { FETCH_DATA_POKEMON, FETCH_DATA_POKEMON_COMPLETE } from '../actionTypes/pokemonActionType';

const initialState = {
    isLoading: false,
    data: []
}

function getListPokemon(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_POKEMON:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DATA_POKEMON_COMPLETE:
            return {                
                isLoading: false,
                data: action.payload.fetchedData
            };
        default:
            return state;
    }
}

function listPokemon(state = {}, action) {
    switch (action.type) {
        case FETCH_DATA_POKEMON:           
        case FETCH_DATA_POKEMON_COMPLETE:
            return getListPokemon(state,action);
        default:
            return state;
    }
}

export default listPokemon;