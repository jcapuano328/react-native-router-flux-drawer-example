import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import {HomeView,AboutView,ItemsView,ItemView,NavigableView} from '../views';
import { connect } from 'react-redux';
import {accept,select,create} from '../actions/item';


import navBar from '../components/navBar';
const rightButtons = [
    {image:'refresh-dark', onPress: () => console.log('Press refresh!')},
    {image:'info-dark', onPress: () => Actions.about() }
];

const navBarOpts = {
    style: {
        backgroundColor: 'gray'
    },
    textcolor: 'white',
    menu: 'menu-dark',
    left: 'chevron-left-dark',
    onBack: Actions.pop,
    rightButtons: rightButtons
};
const navBarActionListOpts = {
    ...navBarOpts,
    rightButtons: [
        {image:'add', onPress: (props) => {
            console.log('Press add!');
            props.create();
            Actions.item();
        }},
        ...rightButtons
    ]
};
const navBarActionItemOpts = {
    ...navBarOpts,
    rightButtons: [
        {image:'accept', onPress: (props) => {
            props.accept();
            Actions.pop();
        }},
        {image:'discard', onPress: () => Actions.pop()}
    ]
};

const NavBarActionList = connect(null, {create,select})(navBar(navBarActionListOpts));
const NavBarActionItem = connect(null, {accept})(navBar(navBarActionItemOpts));


export const MenuItems = [
    {key: 'home',name: 'Home', image: 'home-light'},
    {key: 'items',name: 'Items', image: 'items-light'},
    {key: 'about',name: 'About', image: 'info-light'}
];

export default Actions.create(
    <Scene key="root" navBar={navBar(navBarOpts)}>
        <Scene key="home" type='reset' component={HomeView} title="" />
        <Scene key="items" navBar={NavBarActionList} component={ItemsView} title="Items" initial={true} />
        <Scene key="item" navBar={NavBarActionItem} component={ItemView} title="Item" />
        <Scene key="subitem" component={NavigableView("This is the SubItem View", 'yellow', ['about'])} title="SubItem" />
        <Scene key="about" component={AboutView} title="About" />
    </Scene>
);
