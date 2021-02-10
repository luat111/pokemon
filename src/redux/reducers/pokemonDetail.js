import { FETCH_DATA_DETAIL_POKEMON, FETCH_DATA_POKEMON_DETAIL_COMPLETE } from '../actionTypes/pokemonDetailActionType';

const initialState = {
    isLoading: false,
    dataPokemon: []
}

function getDetailPokemon(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_DETAIL_POKEMON:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DATA_POKEMON_DETAIL_COMPLETE:            
            return {
                ...state,
                isLoading: false,
                dataPokemon: { ...state.dataPokemon, ...action.payload.fetchedData }
            };
        default:
            return state;
    }
}

function detailPokemon(state = {}, action) {
    switch (action.type) {
        case FETCH_DATA_DETAIL_POKEMON:
        case FETCH_DATA_POKEMON_DETAIL_COMPLETE:
            return {
                ...state,
                [action.payload.id]: getDetailPokemon(state[action.payload.id], action)
            };
        default:
            return state;
    }
}

export default detailPokemon;