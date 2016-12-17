import React from 'react';
import {Actions} from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';

let NavigableView = React.createClass({
    onNext(next) {
        return () => {
            Actions[next] && Actions[next]();
        }
    },
    render() {
        return (
            <View style={{flex: 1, backgroundColor: this.props.color, marginTop: 54, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text>{this.props.title}</Text>
                <View style={{flex:1, justifyContent: 'center'}}>
                    {(this.props.next || []).map((n,i) => {
                        return (
                            <TouchableOpacity key={i} onPress={this.onNext(n)}>
                                <Text>Go to {n}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
});

export default (title,color,next) => {
    return () => <NavigableView title={title} color={color} next={next} />
}
