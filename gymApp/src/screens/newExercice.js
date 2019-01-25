/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, Button, Text, View, TouchableOpacity, Picker} from 'react-native';


export default class NewExercice extends Component<> {


    constructor(props) {
        super(props);
        this.state = {
                title: '',
                id: '',
                name: '',
                repetitions: '',
                weight: '',
            }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Categoria</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({title: text})
                    }}/>
                <Text style={styles.label}>Numero do aparelho</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({id: text})}/>
                <Text style={styles.label}>Nome do exercicio</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({name: text})}/>
                <Text style={styles.label}>Quantidade de repetições</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({repetitions: text})}/>
                <Text style={styles.label}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({weight: text})}/>
                <Button
                    onPress={() => {
                        console.log(this.state)
                        this.props.action.addCategories(this.state)
                        this.props.navigation.goBack()
                    }}
                    title={"enviar"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    label: {
        fontWeight: 'bold',
        margin: 15,
        fontSize: 20,
    },
    input: {
        marginLeft: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    }
});
