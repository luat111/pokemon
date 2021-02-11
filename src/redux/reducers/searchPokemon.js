import {
    SEARCH_POKEMOM, SEARCH_POKEMOM_COMPLETE,
    SEARCH_POKEMOM_BY_NAME, SEARCH_POKEMOM_BY_NAME_COMPELETE
} from '../actionTypes/searchPokemonActionType';

const initialState = {
    isLoading: false,
    dataPokemon: [],
    dataSearchByName: []
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
        case SEARCH_POKEMOM_BY_NAME:
            return {
                isLoading: true,
            };
        case SEARCH_POKEMOM_BY_NAME_COMPELETE:
            return {
                isLoading: false,
                dataSearchByName: action.payload.fetchedData
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
        case SEARCH_POKEMOM_BY_NAME:
        case SEARCH_POKEMOM_BY_NAME_COMPELETE:
            return searchPokemon(state, action);
        default:
            return state;
    }
}

export default listSearchedPokemon;