'use strict';
import React from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from './routes';
import { View/*, Text, TouchableHighlight, PixelRatio*/ } from 'react-native';
import Drawer from 'react-native-drawer';
import NavMenu from './components/navDrawerMenu';


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
                <Drawer
                    ref={c => this.drawer = c}
                    type="overlay"
                    side="left"
                    open={this.state.open}
                    onOpen={()=>this.setState({open: true})}
                    onClose={()=>this.setState({open: false})}
                    content={<NavMenu onSelect={this.onSelect} />}
                    tapToClose={true}
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
                    negotiatePan={true}
                    tweenHandler={(ratio) => ({
                     main: { opacity:Math.max(0.54,1-ratio) }
                })}>
                    <View style={{flex:1}}>
                        <Router>
                            {routes}
                        </Router>
                        {/*
                        <Text>This is the {this.state.view} view</Text>
                        <TouchableHighlight
                          style={{
                            backgroundColor: 'white',
                            padding: 15,
                            borderColor: '#eeeeee',
                            borderWidth:1,
                            borderBottomWidth: 1 / PixelRatio.get(),
                            borderBottomColor: '#aaaaaa',
                            marginRight:20,
                            marginLeft:20,
                            alignSelf: 'center',
                          }}
                          underlayColor="#B5B5B5"
                          onPress={() => this.setState({open: true})}>
                          <Text>Open Sez Me</Text>
                        </TouchableHighlight>
                        */}
                    </View>
                </Drawer>
            </View>
        );
    }
});

module.exports = App;
