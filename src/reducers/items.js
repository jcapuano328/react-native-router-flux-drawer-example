import types from '../constants/actionTypes';

module.exports = (state = [], action) => {
    let idx = -1;
    switch (action.type) {
    case types.SET_ITEMS:
        return action.value;

    /*
    case types.ADD_ITEM:
        let id = state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
    */

    case types.UPDATE_ITEM:
        idx = state.findIndex((i) => i.id == action.value.id);
        if (idx > -1) {
            state[idx] = action.value;
        }
        return [
            ...state
        ];

    case types.REMOVE_ITEM:
        idx = state.findIndex((i) => i.id == action.value.id);
        if (idx > -1) {
            state = state.slice(idx,1);
        }
        return [
            ...state
        ];


    default:
        return state;
    }
}
