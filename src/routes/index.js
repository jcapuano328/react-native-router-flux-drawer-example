import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import {HomeView,AboutView,ItemsView,NavigableView} from '../views';
import Icons from '../resources';
import navBar from '../components/navBar';
const NavBar = navBar({
    style: {
        backgroundColor: 'gray'
    },
    textcolor: 'white',
    menu: 'menu-dark',
    left: 'chevron-left-dark',
    onBack: Actions.pop,
    rightButtons: [
        {image:'refresh-dark', onPress: () => console.log('Press refresh!')},
        {image:'info-dark', onPress: () => Actions.about() }
    ]
});

export const MenuItems = [
    {key: 'home',name: 'Home', image: 'home-light'},
    {key: 'items',name: 'Items', image: 'items-light'},
    {key: 'about',name: 'About', image: 'info-light'}
];

export default Actions.create(
    <Scene key="root" navBar={NavBar}>
        <Scene key="home" type='reset' component={HomeView} title="" initial={true} />
        <Scene key="items" component={ItemsView} title="Items" />
        <Scene key="item" component={NavigableView("This is the Item View", 'pink', ['subitem','about'])} title="Item" />
        <Scene key="subitem" component={NavigableView("This is the SubItem View", 'yellow', ['about'])} title="SubItem" />
        <Scene key="about" component={AboutView} title="About" />
    </Scene>
);
