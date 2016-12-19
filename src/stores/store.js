import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
/*  the "store" will look like so:
    {
        info: {
            version: string,
            releasedate: datetime
        },
        items: [], // the list of managed items
        currentitem: {  // currently selected item
            id: int,
            status: string,
            name: string,
            desc: string,
            subitems: []
        },
        currentsubitem: {
            id: int,
            name: string,
            desc: string
        },
        filter: {   // the filter for the items
            period: string
        },
        toast: {
            active: bool,
            message: string,
            duration: integer
        }
    }
*/
const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}
const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;
