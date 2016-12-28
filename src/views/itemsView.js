'use strict'

import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import ActionList from '../components/actionList';
import {getAll,setStatus,remove} from '../actions/items';
import {select} from '../actions/item';

var ItemsView = React.createClass({
    componentDidMount() {
        return this.props.getAll();
    },
    onStatus(item, e) {
        this.props.setStatus(item, e.value);
    },
    onSelect(item) {
        this.props.select(item);
        Actions.item();
    },
    onRemove(item) {
        this.props.remove(item);
    },
    render() {
        return (
            <ActionList items={this.props.items}
                backgroundColor={'gray'}
                formatStatus={(i) => i.status ? 'active' : 'inactive'}
                formatTitle={(i) => i.name}
                formatSubtitle={(i) => i.desc}
                onStatus={this.onStatus}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
            />
        );
    }
});

const mapStateToProps = (state) => ({
    items: state.items.sort.map((id) => state.items.table[id])
});

module.exports = connect(
  mapStateToProps,
  {getAll,setStatus,select,remove}
)(ItemsView);
