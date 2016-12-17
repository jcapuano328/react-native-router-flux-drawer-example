import types from '../constants/actionTypes';
import items from '../services/items';
import {toast} from './toast';

export const getAll = () => (dispatch) => {
    return items.getAll()
    .then((data) => {
        dispatch({type: types.SET_ITEMS, value: data});
    })
    .catch((err) => {
        console.error(err);
        toast(err.message || err)(dispatch);
    });
}
