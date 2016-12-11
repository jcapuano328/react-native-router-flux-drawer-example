import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Icons from '../resources';
import {NavigableView} from '../views';
import navBar from '../components/navBar';
const NavBar = navBar({
    style: {
        backgroundColor: 'gold'
    },
    onBack: Actions.pop,
    rightButtons: [
        {image:'refresh-light', onPress: () => console.log('Press refresh!')},
        {image:'info-light', onPress: () => Actions.about() }
    ]
});

export const MenuItems = [
    {key: 'home',name: 'Home', image: 'home-light'},
    {key: 'items',name: 'Items', image: require('../resources/list-light.png')},
    {key: 'about',name: 'About', image: 'info-light'}
];

export default Actions.create(
    <Scene key="root" navBar={NavBar}>
        <Scene key="home" type='reset' navBar={NavBar} component={NavigableView("This is the Home View", 'red', ['items','about'])} title="Home" initial={true} />
        <Scene key="items" navBar={NavBar} component={NavigableView("This is the Items List View", 'blue', ['about'])} title="Items" />
        <Scene key="about" navBar={NavBar} component={NavigableView("This is the About View", 'green')} title="About" />
    </Scene>
);
