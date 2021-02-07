import { FETCH_DATA_MENU, FETCH_DATA_MENU_COMPLETE } from '../actionTypes/menuActionType';
import { fetchData } from '../../api/index';

const fetchDataMenu = (nameMenu) => {
    return {
        type: FETCH_DATA_MENU,
        payload: { nameMenu }
    }

}

const fetchDataMenuComplete = (nameMenu, fetchedData) => {
    return {
        type: FETCH_DATA_MENU_COMPLETE,
        payload: { nameMenu, fetchedData }
    }
}

export const fetchApiMenu = (url, nameMenu) => async (dispatch) => {
    try {
        await dispatch(fetchDataMenu(nameMenu));
        const data = await fetchData(url);
        const { results } = data;
        await dispatch(fetchDataMenuComplete(nameMenu, results));
    }
    catch (err) {
        console.log(err);
    }
}