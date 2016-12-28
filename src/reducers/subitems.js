import types from '../constants/actionTypes';

module.exports = (state = {}, action) => {
    switch (action.type) {
    case types.SET_SUBITEMS:
        return {
            ...action.value
        };

    case types.ADD_SUBITEM:
        // move this to action
        //let id = state.sort.reduce((maxId, id) => Math.max(id, maxId), 0) + 1;
        return {
            ...state,
            [action.value.id]: {
                id: action.value.id,
                name: action.value.name,
                desc: action.value.desc
            }
        };

    case types.UPDATE_SUBITEM:
        return {
            ...state,
            [action.value.id]: {
                ...action.value
            }
        };

    case types.REMOVE_SUBITEM:
        let table = {...state};        
        if (table.hasOwnProperty(action.value.id)) {
            delete table[action.value.id];
        }
        return {
            ...table
        };

    default:
        return state;
    }
}
