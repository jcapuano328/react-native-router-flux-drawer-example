import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import NavigationDrawer from '../components/navDrawer';
import {NavigableView} from '../views';
import navBar from '../components/navBar';
const NavBar = navBar({
    onBack: Actions.pop,    
    rightButtons: [
        {image:'refresh-light', onPress: () => console.log('Press refresh!')},
        {image:'info-light', onPress: () => console.log('Press about!')}
    ]
});

export default Actions.create(
    <Scene key="root" navBar={NavBar}>
        <Scene key="home" navBar={NavBar} component={NavigableView("This is the Home View", 'red', ['items','about'])} title="Home" initial={true} />
        <Scene key="items" navBar={NavBar} component={NavigableView("This is the Items List View", 'blue', ['about'])} title="Items" />
        <Scene key="about" navBar={NavBar} component={NavigableView("This is the About View", 'green')} title="About" />
    </Scene>
);
