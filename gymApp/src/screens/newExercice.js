/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
// import {
//     ActionsContainer,
//     Button,
//     FieldsContainer,
//     Fieldset,
//     Form,
//     FormGroup,
//     Input,
//     Label,
//     Switch
// } from 'react-native-clean-form'


export default class NewExercice extends Component<> {


    constructor(props) {
        super(props);
        this.state = {
                categoria: '',
                id: '',
                name: '',
                repetition: '',
                weight: '',
            }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Categoria</Text>
                <TextInput
                    onChangeText={(text) => this.setState({categoria: text})}/>
                <Text>Numero do aparelho</Text>
                <TextInput
                    onChangeText={(text) => this.setState({id: text})}/>
                <Text>Nome do exercicio</Text>
                <TextInput
                    onChangeText={(text) => this.setState({name: text})}/>
                <Text>Quantidade de repetições</Text>
                <TextInput
                    onChangeText={(text) => this.setState({repetition: text})}/>
                <Text>Peso</Text>
                <TextInput
                    onChangeText={(text) => this.setState({weight: text})}/>
                <Button
                    onPress={() => {}}
                    title={"enviar"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    }
});
