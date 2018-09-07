import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class LoginForm extends Component {

    handleTextChange = (value) => {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"john.doe@gmail.com"}
                    placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
                    returnKeyLabel={"Next"}
                    returnKeyType={"next"}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    onChangeText={(value) => this.handleTextChange(value)}
                    onSubmitEditing={() => this._passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"password"}
                    placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
                    secureTextEntry
                    returnKeyLabel={"Submit"}
                    returnKeyType={"send"}
                    onChangeText={(value) => this.handleTextChange(value)}
                    ref={(input) => this._passwordInput = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 'auto',
        marginBottom: 20
    },
    input: {
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 10
    },
    button: {
        backgroundColor: "#34495e",
        padding: 10,
        marginHorizontal: 10
    },
    buttonText: {
        color: "#fff",
        textAlign: 'center'
    }
})
LoginForm.propTypes = {};

export default LoginForm;
