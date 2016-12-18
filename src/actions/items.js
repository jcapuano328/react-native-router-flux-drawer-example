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

export const save = (item) => (dispatch) => {
    return items.save(item)
    .then((i) => {
        dispatch({type: types.SET_ITEM, value: i});
    })
    .catch((err) => {
        console.error(err);
        toast(err.message || err)(dispatch);
    });
}

export const update = (item) => (dispatch) => {
    dispatch({type: types.UPDATE_ITEM, value: item});
}

export const remove = (item) => (dispatch) => {
    dispatch({type: types.REMOVE_ITEM, value: item});
}

export const setStatus = (item, status) => (dispatch) => {
    item.status = status == 'active';
    dispatch({type: types.UPDATE_ITEM, value: item});
}
