import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
/*  the "store" will look like so:
    {
        info: {
            version: string,
            releasedate: datetime
        },
        toast: {
            active: bool,
            message: string,
            duration: integer
        },
        filter: {   // the filter for the items
            period: string
        },
        items: { // the list of managed items
            sort: [  //ordered list of items identifiers
            ],
            table: {
                id : {
                    id: int,
                    status: string,
                    name: string,
                    desc: string,
                    subitems: [
                        // ordered list of subitem identifiers for this item
                    ]
                },
                ...
            }
        },
        subitems: {
            id : {
                id: int,
                status: string,
                name: string,
                desc: string
            }
            ...
        },
        currentitem: {  // currently selected item
            id: int,
            status: string,
            name: string,
            desc: string,
            subitems: [
                // ordered list of subitem identifiers for this item
            ]
        },
        currentsubitem: {
            id: int,
            name: string,
            desc: string
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
