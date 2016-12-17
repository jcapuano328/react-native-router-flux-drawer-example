import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import items from './items';

module.exports = combineReducers({
    info: info,
    items: items,
    toast: toast
});
