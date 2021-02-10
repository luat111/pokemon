import { SEARCH_POKEMOM, SEARCH_POKEMOM_COMPLETE } from '../actionTypes/searchPokemonActionType';

const initialState = {
    isLoading: false,
    dataPokemon: []
}

function searchPokemon(state = initialState, action) {
    switch (action.type) {
        case SEARCH_POKEMOM:
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_POKEMOM_COMPLETE:
            return {
                ...state,
                isLoading: false,
                dataPokemon: { ...state.dataPokemon, ...action.payload.fetchedData }
            };
        default:
            return state;
    }
}

function listSearchedPokemon(state = {}, action) {
    switch (action.type) {
        case SEARCH_POKEMOM:
        case SEARCH_POKEMOM_COMPLETE:
            return {
                ...state,
                [action.payload.searchBy]: searchPokemon(state[action.payload.searchBy], action)
            };
        default:
            return state;
    }
}

export default listSearchedPokemon;