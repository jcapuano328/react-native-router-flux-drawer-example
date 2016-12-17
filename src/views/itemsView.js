'use strict'

import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import ActionList from '../components/actionList';
import {getAll} from '../actions/items';

var ItemsView = React.createClass({
    componentDidMount() {
        return this.props.getAll();
    },
    onStatus(item, e) {
    },
    onChanged(item, props) {
    },
    onSelect(item) {
    },
    onAdd() {
    },
    onRemove(item) {
    },
    onAccept() {
    },
    onDiscard() {
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
    items: state.items
});

module.exports = connect(
  mapStateToProps,
  {getAll}
)(ItemsView);
