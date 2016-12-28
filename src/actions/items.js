import types from '../constants/actionTypes';
import items from '../services/items';
import { normalize } from 'normalizr';
import * as Schemas from '../../src/stores/schemas';
import {toast} from './toast';

export const getAll = () => (dispatch) => {
    return items.getAll()
    .then((data) => {        
        let normalized = normalize(data, Schemas.items);
        dispatch({type: types.SET_ITEMS, value: {ids: normalized.result, items: normalized.entities.items}});
        dispatch({type: types.SET_SUBITEMS, value: normalized.entities.subitems});
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
