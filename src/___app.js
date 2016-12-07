'use strict';
import React from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from './routes';
import { View/*, Text, TouchableHighlight, PixelRatio*/ } from 'react-native';
import Drawer from 'react-native-drawer';
import NavMenu from './components/navDrawerMenu';

let NavDrawer = React.createClass({
    render() {
        return (
            <Drawer
                ref={c => this.drawer = c}
                type="overlay"
                side="left"
                open={this.props.open}
                onOpen={this.props.onOpen}
                onClose={this.props.onClose}
                content={<NavMenu onSelect={this.props.onSelect} />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                {this.props.children}
            </Drawer>
        );
    }
});


let App = React.createClass({
    getInitialState() {
        return {
            view: 'home',
            open: false
        };
    },
    onSelect(e) {
        console.log(e);
        Actions[e]();
        //this.drawer.close();
        this.setState({open: false, view: e});
    },
    render () {
        return (
            <View style={{flex:1}}>
                <NavDrawer open={this.state.open}
                    onOpen={()=>this.setState({open: true})}
                    onClose={()=>this.setState({open: false})}
                    onSelect={this.onSelect}>
                    <View style={{flex:1}}>
                        <Router>
                            {routes}
                        </Router>
                    </View>
                </NavDrawer>
            </View>
        );
    }
});

module.exports = App;
