/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NewExercice extends Component<> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Teste</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    }
});
