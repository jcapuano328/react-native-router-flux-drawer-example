import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import items from './items';
import item from './item';

module.exports = combineReducers({
    info: info,
    items: items,
    currentitem: item,
    toast: toast
});
