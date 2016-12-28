import types from '../constants/actionTypes';

module.exports = (state = {}, action) => {
    switch (action.type) {
    case types.SELECT_SUBITEM:
        return action.value;

    case types.UPDATE_SELECTED_SUBITEM:
        return {
            ...state,
            [action.value.field]: action.value.value
        };

    default:
        return state;
    }
}
