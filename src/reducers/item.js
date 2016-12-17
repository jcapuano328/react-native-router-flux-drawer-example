import types from '../constants/actionTypes';

module.exports = (state = {}, action) => {
    switch (action.type) {
    case types.SELECT_ITEM:
        return action.value;

    case types.UPDATE_SELECTED_ITEM:
        state[action.value.field] = action.value.value;
        return state;

    default:
        return state;
    }
}
