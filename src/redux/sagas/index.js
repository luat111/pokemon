import { takeLatest, delay, put, call } from 'redux-saga/effects';
import { searchPokemonByNameCompelete } from '../actions/searchPokemonAction';
import { SEARCH_POKEMOM_BY_NAME } from '../actionTypes/searchPokemonActionType';
import { fetchData } from '../../api/index';

function* filterListSearchedByName({ payload }) {
    yield delay(500);
    const reps = yield call(fetchData, payload.url);   
    if (!reps) {
        yield put(searchPokemonByNameCompelete(payload.pokemonName, ['Not found']));
    }
    else {
        yield put(searchPokemonByNameCompelete(payload.pokemonName, reps));
    }
}

function* rootSaga() {
    yield takeLatest(SEARCH_POKEMOM_BY_NAME, filterListSearchedByName);
}


export default rootSaga; 