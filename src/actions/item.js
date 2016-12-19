import types from '../constants/actionTypes';

export const select = (item) => (dispatch) => {
    dispatch({type: types.SELECT_ITEM, value: item});
}

export const create = () => (dispatch) => {
    select({
        status: true,
        name: 'New Item',
        desc: '',
        subitems: []
    })(dispatch);
}

export const accept = () => (dispatch,getState) => {
    const {currentitem} = getState();
    dispatch({type: currentitem.id ? types.UPDATE_ITEM : types.ADD_ITEM, value: currentitem});
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
