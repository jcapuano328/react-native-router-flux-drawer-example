import React from 'react';
import { View, Switch, Text, TextInput } from 'react-native';
import ActionList from '../components/actionList';
import { connect } from 'react-redux';
import { setStatus,setName,setDesc } from '../actions/item';

var ItemView = React.createClass({
    onChangeStatus(v) {
        this.props.setStatus(v);
    },
    onChangeName(v) {
        this.props.setName(v);
    },
    onChangeDesc(v) {
        this.props.setDesc(v);
    },
    onSelect(subitem) {
    },
    onAdd() {
    },
    onRemove(subitem) {
    },
    render() {
        return (
            <View style={{flex: 1,marginTop: 50}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{flex: 3, marginLeft: 10, fontSize: 20}} placeholder={'Name'} onChangeText={this.onChangeName}>{this.props.name}</TextInput>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Active</Text>
                        <Switch value={this.props.status} onValueChange={this.onChangeStatus} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput style={{flex: 1, marginLeft: 10, fontSize: 20}} placeholder={'Description'} onChangeText={this.onChangeDesc}>{this.props.desc}</TextInput>
                </View>
                <View style={{flex: 5}}>
                    <ActionList items={this.props.subitems}
                        backgroundColor={'gray'}
                        title={'SubItems'}
                        titlecolor={'white'}
                        formatTitle={(i) => i.name}
                        formatSubtitle={(i) => i.desc}
                        onSelect={this.onSelect}
                        onAdd={this.onAdd}
                        onRemove={this.onRemove}
                    />
                </View>
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    id: state.currentitem.id,
    status: state.currentitem.status,
    name: state.currentitem.name,
    desc: state.currentitem.desc,
    subitems: state.currentitem.subitems.map((id) => state.subitems[id])
});

const mapDispatchToProps =  ({
  setStatus,
  setName,
  setDesc
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView);
