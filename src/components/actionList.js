import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import IconButton from './iconButton';
import ActionListItem from './actionListItem';
import Icons from '../resources';
import GetImage  from './getImage';
let getImage = GetImage(Icons);

var ActionList = React.createClass({
    renderHeader() {
        if (this.props.onAdd) {
            return (
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 7,
                        backgroundColor: this.props.backgroundColor || 'transparent', borderColor: 'black', borderWidth: 1, borderRadius: 2, borderStyle: 'solid'
                    }}>
                        <Text style={{color: this.props.titlecolor || 'black', fontSize: 22, fontWeight: 'bold', margin: 10}}>{this.props.title}</Text>
                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <IconButton image={getImage('add')} onPress={this.props.onAdd} />
                        </View>
                    </View>
                </View>
            );
        }
        return null;
    },
    renderList() {
        let items = this.props.items||[];
        if (items.length > 0) {
            let renderItem = this.props.renderItem || this.renderItem;
            return (
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}>
                    {items.map(renderItem)}
                </ScrollView>
            );
        }

        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontSize: 28, fontWeight: 'bold'}}></Text>
            </View>
        );
    },
    renderItem(item, i) {
        return (
            <ActionListItem key={i} item={item}
                status={this.props.formatStatus ? this.props.formatStatus(item) : null}
                title={this.props.formatTitle ? this.props.formatTitle(item) : null}
                subtitle={this.props.formatSubtitle ? this.props.formatSubtitle(item) : null}
                onStatus={this.props.onStatus}
                onSelect={this.props.onSelect}
                onRemove={this.props.onRemove}
            />
        );
    },
    render() {
        console.log('actionList');
        let marginTop = this.props.hasOwnProperty('marginTop') ? this.props.marginTop : 60;
        return (
            <View style={{flex: 1,justifyContent: 'flex-start',marginTop: marginTop}}>
                {this.renderHeader()}
                <View style={{flex: 1}}>
                    {this.renderList()}
                </View>
            </View>
        );
    }
});

module.exports = ActionList;
