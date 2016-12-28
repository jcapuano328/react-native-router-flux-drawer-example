import types from '../constants/actionTypes';

module.exports = (state = {}, action) => {
    switch (action.type) {
    case types.SELECT_ITEM:
        return action.value;

    case types.UPDATE_SELECTED_ITEM:
        return {
            ...state,
            [action.value.field]: action.value.value
        };

    case types.ADD_SUBITEM:
        return {
            ...state,
            subitems: [
                ...state.subitems,
                action.value.id
            ]
        };

    case types.UPDATE_SUBITEM:
        return {
            ...state
        };

    case types.REMOVE_SUBITEM:
        return {
            ...state,
            subitems: state.subitems.filter((id) => id !== action.value.id)
        };

    default:
        return state;
    }
}
