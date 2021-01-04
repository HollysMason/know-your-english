import api from '../../services/api';

import { GET_WORDS } from './actionsTypes';

export const getWordsByListName = (listName: string) => async (dispatch: any) => {
    const data = await api.getWords(listName);

    dispatch({ type: GET_WORDS, payload: { listName, data } });
};