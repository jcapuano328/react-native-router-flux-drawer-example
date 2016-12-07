'use strict';
import React from 'react';
import { Router } from 'react-native-router-flux';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './stores/store';


let App = React.createClass({
    render () {
        return (
            <Provider store={store}>
                <Router>
                    {routes}
                </Router>
            </Provider>
        );
    }
});

module.exports = App;
