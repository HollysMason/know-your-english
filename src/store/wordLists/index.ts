import { GET_LISTS, CREATE_LIST, REMOVE_LIST, RENAME_LIST } from './actionTypes';

export interface WordList {
    name: string,
    createdAt: string,
    learned: boolean,
}

const initialState: WordList[] = [];

const wordListsReducer = (
    state = initialState,
    action: { type: string, payload: any }
) => {
    switch (action.type) {
        case GET_LISTS:
            return [...state, ...action.payload];
        case CREATE_LIST:
            return [...state, action.payload];
        case REMOVE_LIST:
            return state.filter((list: WordList) => list.name !== action.payload);
        case RENAME_LIST:
            return state;
        default:
            return state;
    }
}

export default wordListsReducer;

