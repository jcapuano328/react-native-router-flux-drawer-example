'use strict';
import React, {PropTypes} from 'react';
import { Router, Scene, DefaultRenderer, Actions, Reducer } from 'react-native-router-flux';
//import routes from './routes';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';
import NavMenu from './components/navDrawerMenu';
import {NavigableView} from './views';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};


let NavDrawer = React.createClass({
    propTypes: {
        navigationState: PropTypes.object,
    },
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref={c => this.drawer = c}
                type="overlay"
                side="left"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                content={<NavMenu onSelect={()=>Actions.refresh({key:e, open: false})} />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
});


let App = React.createClass({
    render () {
        return (
            <View style={{flex:1}}>
                <Router createReducer={reducerCreate} >
                    <Scene key="drawer" component={NavDrawer} open={false}>
                        <Scene key="home" component={NavigableView("This is the Home View", 'red', ['items','about'])} title="Home" initial={true} />
                        <Scene key="items" component={NavigableView("This is the Items List View", 'blue', ['about'])} title="Items" />
                        <Scene key="about" component={NavigableView("This is the About View", 'green')} title="About" />
                    </Scene>
                </Router>
            </View>
        );
    }
});

module.exports = App;
