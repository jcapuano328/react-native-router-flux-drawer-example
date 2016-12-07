var React = require('react');
import { View, Text, TouchableOpacity } from 'react-native';

var NavMenuItem = React.createClass({
    onPress() {
        this.props.onPress && this.props.onPress(this.props.item.key);
    },
    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={{flex: 1,backgroundColor: '#fff'}}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flex: 1,
                        flexDirection: 'row',
                        margin: 5,
                        padding: 5,
                        backgroundColor: '#eaeaea',
                        borderRadius: 3
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,textAlign: 'center',margin: 10}}>{this.props.item.name}</Text>
                            <Text style={{fontSize: 15,textAlign: 'center',margin: 10}}>{this.props.item.desc}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

module.exports = NavMenuItem;
