import types from '../constants/actionTypes';

module.exports = (state = [], action) => {
    switch (action.type) {
    case types.SET_ITEMS:
        return action.value;

    default:
        return state;
    }
}
