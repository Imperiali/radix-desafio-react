/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Exercice from "./exercice";

export default class Category extends Component<> {

    render() {
        const {title, exercices} = this.props
        console.log(exercices)
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>{ title }</Text>
                <FlatList
                    data={exercices}
                    keyExtractor={({id})=> id.toString()}
                    renderItem={({item}) =>  <Exercice
                        id={item.id}
                        name={item.name}
                        repetitions={item.repetitions}
                        weight={item.weight}
                    /> }>

                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    }
});
