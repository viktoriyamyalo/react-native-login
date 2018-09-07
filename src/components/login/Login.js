import React, {Component} from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} enabled style={styles.container}>
                <LoginForm/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3498db",
    },
    logo: {

    },
    logoText: {

    }
})
Login.propTypes = {};

export default Login;
