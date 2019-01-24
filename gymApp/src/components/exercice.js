/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Exercice extends Component<> {

    render() {
        const {id, name, repetitions, weight} = this.props;
        return (
            <View>
                <TouchableOpacity
                    style={styles.exercice}
                    onPress={() => {
                        console.warn(name)
                    }}>
                    <Text style={styles.item} >{ id } - </Text>
                    <Text style={styles.item}>{ name } - </Text>
                    <Text style={styles.item}>{ repetitions } - </Text>
                    <Text style={styles.item}>{ weight }</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
      fontSize: 15
    },
    exercice: {
        flex: 1,
        marginLeft:30,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
