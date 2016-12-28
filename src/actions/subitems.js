import types from '../constants/actionTypes';

export const update = (subitem) => (dispatch) => {
    dispatch({type: types.UPDATE_SUBITEM, value: subitem});
}

export const remove = (subitem) => (dispatch) => {
    dispatch({type: types.REMOVE_SUBITEM, value: subitem});
}
