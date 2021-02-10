import { FETCH_DATA_MENU, FETCH_DATA_MENU_COMPLETE } from '../actionTypes/menuActionType';

const initialState = {
    isLoading: false,
    listMenu: []
}

function getMenu(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_MENU:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DATA_MENU_COMPLETE:            
            return {
                ...state,
                isLoading: false,
                listMenu: [...state.listMenu, ...action.payload.fetchedData]
            };
        default:
            return state;
    }
}

function listMenu(state = {}, action) {
    switch (action.type) {
        case FETCH_DATA_MENU:           
        case FETCH_DATA_MENU_COMPLETE:
            return {
                ...state,            
                [action.payload.nameMenu]: getMenu(state[action.payload.nameMenu],action)
            };
        default:
            return state;
    }
}

export default listMenu;