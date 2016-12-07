import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';

module.exports = combineReducers({
    info: info,
    toast: toast
});
