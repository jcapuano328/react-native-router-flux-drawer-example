import types from '../constants/actionTypes';

export const select = (item) => (dispatch) => {
    dispatch({type: types.SELECT_ITEM, value: item});
}

export const setStatus = (value) => (dispatch) => {
    dispatch({type: types.UPDATE_SELECTED_ITEM, value: {field: 'status', value: value}});
}

export const setName = (value) => (dispatch) => {
    dispatch({type: types.UPDATE_SELECTED_ITEM, value: {field: 'name', value: value}});
}

export const setDesc = (value) => (dispatch) => {
    dispatch({type: types.UPDATE_SELECTED_ITEM, value: {field: 'desc', value: value}});
}
