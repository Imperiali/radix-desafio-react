/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, SafeAreaView, SectionList} from 'react-native';
import Category from "../components/category";
import Exercice from "../components/exercice";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<> {


  constructor(props) {
    super(props);

    this.state = {
        categories: [
          {
            id: "1",
            title: "peito",
            data : [
              {
                id: 1,
                name: "exercicio a",
                repetitions: "3/15",
                weight: 35
              },
              {
                id: 2,
                name: "exercicio b",
                repetitions: "3/15",
                weight: 35
              },
              {
                id: 3,
                name: "exercicio c",
                repetitions: "3/15",
                weight: 35
              }
            ]
          },
          {
            id: "2",
            title: "costas",
            data : [
              {
                id: 1,
                name: "exercicio a",
                repetitions: "3/15",
                weight: 35
              },
              {
                id: 2,
                name: "exercicio b",
                repetitions: "3/15",
                weight: 35
              },
            ]
          },
          {
            id: "3",
            title: "perna",
            data : [
              {
                id: 1,
                name: "exercicio a",
                repetitions: "3/15",
                weight: 35
              },

            ]
          }
        ]
    }

  }

  _renderSectionHeader = ({ section : {title}}) => (
      <Text style={styles.header}>{title}</Text>
  )

  _renderItem = ({item, section}) => (
      <Exercice id={item.id}
                name={item.name}
                repetitions={item.repetitions}
                weight={item.weight} />
  )

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View
              style={styles.sectionList}>
            <SectionList
                renderItem={this._renderItem}

                renderSectionHeader={this._renderSectionHeader}

                sections={this.state.categories}

                keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  sectionList:{
    flex: 1
  },
  header:{
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
