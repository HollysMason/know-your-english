import { GET_WORDS, CREATE_WORD, REMOVE_WORD, EDIT_WORD } from './actionsTypes';

export interface Word {
    en: string,
    rus: string,
    repeated: number,
    learned: boolean,
}

const initialState: { [key: string]: Word[] } = {};

const wordReducer = (
    state = initialState,
    action: { type: string, payload: any }
) => {
    switch (action.type) {
        case GET_WORDS:
            return { ...state, [action.payload.listName]: action.payload.data }
        default:
            return state;
    }
}

export default wordReducer;

