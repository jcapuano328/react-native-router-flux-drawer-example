import types from '../constants/actionTypes';

module.exports = (state = {}, action) => {
    switch (action.type) {
    case types.SELECT_ITEM:
        return action.value;

    case types.UPDATE_SELECTED_ITEM:
        let item = {};
        item[action.value.field] = action.value.value;
        return {
            ...state,
            ...item
        };

    case types.ADD_SUBITEM:
        return [
            ...state,
            {
                id: state.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1,
                name: action.value.name,
                desc: action.value.desc
            }
        ];

    case types.UPDATE_SUBITEM:
        idx = state.findIndex((i) => i.id == action.value.id);
        if (idx > -1) {
            state[idx] = action.value;
        }
        return [
            ...state
        ];

    case types.REMOVE_SUBITEM:
        idx = state.findIndex((i) => i.id == action.value.id);
        if (idx > -1) {
            state.splice(idx,1);
        }
        return [
            ...state
        ];


    default:
        return state;
    }
}
