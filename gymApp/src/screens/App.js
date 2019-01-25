/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Exercice from "../components/exercice";
import NewExercice from "./newExercice";
import Icon from "react-native-vector-icons/MaterialIcons";
import Provider,{withStorageAndAction} from "../provider/provider"

class App extends Component<> {


  constructor(props) {
    super(props);

    // this.state = {
    //     categories: [
    //       {
    //         id: "1",
    //         title: "peito",
    //         data : [
    //           {
    //             id: 1,
    //             name: "exercicio a",
    //             repetitions: "3/15",
    //             weight: 35
    //           },
    //           {
    //             id: 2,
    //             name: "exercicio b",
    //             repetitions: "3/15",
    //             weight: 35
    //           },
    //           {
    //             id: 3,
    //             name: "exercicio c",
    //             repetitions: "3/15",
    //             weight: 35
    //           }
    //         ]
    //       },
    //       {
    //         id: "2",
    //         title: "costas",
    //         data : [
    //           {
    //             id: 1,
    //             name: "exercicio a",
    //             repetitions: "3/15",
    //             weight: 35
    //           },
    //           {
    //             id: 2,
    //             name: "exercicio b",
    //             repetitions: "3/15",
    //             weight: 35
    //           },
    //         ]
    //       },
    //       {
    //         id: "3",
    //         title: "perna",
    //         data : [
    //           {
    //             id: 1,
    //             name: "exercicio a",
    //             repetitions: "3/15",
    //             weight: 35
    //           },
    //
    //         ]
    //       }
    //     ]
    // }

  }

  _renderSectionHeader = ({ section : {title}}) => (
      <TouchableOpacity
                        onPress={()=> this.props.action.addCategories({title: "perna"})}>
        <Text style={styles.header}>{title}</Text>
      </TouchableOpacity>
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

                sections={this.props.storage.categories}

                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.fab}
                              onPress={()=>this.props.navigation.navigate('NewExercicies')}>
              <Icon style={styles.fab} color={'green'} size={60} name="add-circle"/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
  );
  }
}

const stackNavigationConfig = {
  "home": {
    screen: withStorageAndAction(App),
    navigationOptions: {
      title: "Home"
    }
  },
  "NewExercicies": {
    screen: withStorageAndAction(NewExercice),
    navigationOptions: {
      title: "New Exercice"
    }
  }

};


const StackNavigator = createStackNavigator(stackNavigationConfig);

const AppContainer = createAppContainer (StackNavigator);

export default () => (<Provider>
  <AppContainer/>
</Provider>)

const styles = StyleSheet.create({
  fab:{
    position: 'absolute',
    right: 0,
    bottom: 0
  },
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
