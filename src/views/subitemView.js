import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setName,setDesc } from '../actions/subitem';

var SubItemView = React.createClass({
    onChangeName(v) {
        this.props.setName(v);
    },
    onChangeDesc(v) {
        this.props.setDesc(v);
    },
    render() {
        return (
            <View style={{flex: 1,marginTop: 50}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{flex: 3, marginLeft: 10, fontSize: 20}} placeholder={'Name'} onChangeText={this.onChangeName}>{this.props.name}</TextInput>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{flex: 1, marginLeft: 10, fontSize: 20}} placeholder={'Description'} onChangeText={this.onChangeDesc}>{this.props.desc}</TextInput>
                </View>
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    id: state.currentsubitem.id,
    name: state.currentsubitem.name,
    desc: state.currentsubitem.desc
});

const mapDispatchToProps =  ({
  setName,
  setDesc
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubItemView);
