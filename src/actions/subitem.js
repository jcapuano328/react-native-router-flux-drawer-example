import types from '../constants/actionTypes';

export const select = (item) => (dispatch) => {
    dispatch({type: types.SELECT_SUBITEM, value: item});
}

export const create = () => (dispatch) => {
    select({
        name: 'New SubItem',
        desc: ''
    })(dispatch);
}

export const accept = () => (dispatch,getState) => {
    const {currentsubitem} = getState();
    dispatch({type: currentsubitem.id ? types.UPDATE_SUBITEM : types.ADD_SUBITEM, value: currentsubitem});
}

export const setName = (value) => (dispatch) => {
    dispatch({type: types.UPDATE_SELECTED_SUBITEM, value: {field: 'name', value: value}});
}

export const setDesc = (value) => (dispatch) => {
    dispatch({type: types.UPDATE_SELECTED_SUBITEM, value: {field: 'desc', value: value}});
}
