import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import items from './items';
import item from './item';
import subitems from './subitems';
import subitem from './subitem';

module.exports = combineReducers({
    info: info,
    items: items,
    currentitem: item,
    subitems: subitems,
    currentsubitem: subitem,
    toast: toast
});
