import React from 'react';
import NavMenu from './navMenu';
import NavMenuItem from './navMenuItem';

const navitems = [
    {key: 'home',name: 'Home'},
    {key: 'items',name: 'Items'},
    {key: 'about',name: 'About'}
];

let NavDrawerMenu = React.createClass({
    render() {
        return (
            <NavMenu
                items={navitems.map((item,i) =>
                    <NavMenuItem key={i+1} item={item} onPress={this.props.onSelect} />
                )}
            />
        );
    }
});

export default NavDrawerMenu;
