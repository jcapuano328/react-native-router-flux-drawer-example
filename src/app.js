'use strict';
import React from 'react';
import { Router,Scene } from 'react-native-router-flux';
import routes, {MenuItems} from './routes';
import { View } from 'react-native';
import NavDrawer from './components/navDrawer';

let App = React.createClass({
    render () {
        return (
            <View style={{flex:1}}>
                <NavDrawer items={MenuItems}>
                    <Router style={{flex:1}} scenes={routes} />
                </NavDrawer>
            </View>
        );
    }
});

module.exports = App;
