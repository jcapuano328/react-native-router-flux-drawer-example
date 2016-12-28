import types from '../constants/actionTypes';

const defaultState = {
    sort: [],
    table: {}
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case types.SET_ITEMS:
        return {
            sort: [...action.value.ids],
            table: {...action.value.items}
        };

    case types.ADD_ITEM:
        // move this to action
        //let id = state.sort.reduce((maxId, id) => Math.max(id, maxId), 0) + 1;
        return {
            sort: [...state.sort, action.value.id],
            table: {
                ...state.table,
                [action.value.id]: {
                    id: action.value.id,
                    status: action.value.status,
                    name: action.value.name,
                    desc: action.value.desc,
                    subitems: action.value.subitems
                }
            }
        };

    case types.UPDATE_ITEM:
        return {
            sort: [...state.sort],
            table: {
                ...state.table,
                [action.value.id]: {
                    ...action.value
                }
            }
        };

    case types.REMOVE_ITEM:
        let sort = state.sort.filter((id) => id !== action.value.id);
        let table = {...state.table};
        if (table.hasOwnProperty(action.value.id)) {
            delete table[action.value.id];
        }
        return {
            sort: sort,
            table: {...table}
        };

    default:
        return state;
    }
}
