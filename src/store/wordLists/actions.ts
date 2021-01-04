import api from '../../services/api';

import { GET_LISTS } from './actionTypes';

export const getLists = () => async (dispatch: any) => {
    const lists = await api.get('/lists');

    dispatch({ type: GET_LISTS, payload: lists });
};