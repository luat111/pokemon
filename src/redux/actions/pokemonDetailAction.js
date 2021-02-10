import {
    FETCH_DATA_DETAIL_POKEMON, FETCH_DATA_POKEMON_DETAIL_COMPLETE,
} from '../actionTypes/pokemonDetailActionType';
import { fetchData } from '../../api/index';

const fetchDataDetailPokemon = (id) => {
    return {
        type: FETCH_DATA_DETAIL_POKEMON,
        payload: { id }
    }

}

const fetchDataDetailPokemonComplete = (id, fetchedData) => {
    return {
        type: FETCH_DATA_POKEMON_DETAIL_COMPLETE,
        payload: { id, fetchedData }
    }
}


export const fetchApiDetailPokemon = (url, id) => async (dispatch) => {
    try {
        await dispatch(fetchDataDetailPokemon(id));
        const data = await fetchData(url);
        const dataInfo = await fetchData(data.species.url);
        const results = { detail: data, info: dataInfo }
        await dispatch(fetchDataDetailPokemonComplete(id, results));
    }
    catch (err) {
        console.log(err);
    }
}

