import React,{useState} from 'react';
import {View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {loginAction} from '../store/actions/loginActions';
import {Appbar, Button} from 'react-native-paper';

const LoginScreen = ({loginApi}) => {
  const [password,setPassword]=useState('');
  const [username,setUsername]=useState('');
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <SafeAreaView style={styles.content}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button style={styles.buttonStyle} onPress={() => loginApi(username,password)}>
          {'LOGIN'}
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  textInput: {width: '80%', borderWidth: 1, borderColor: 'black', padding: 12},
  passwordInput: {width: '80%', borderWidth: 1, borderColor: 'black', padding: 12,marginTop:20},
  outline: {borderWidth: 1, borderColor: 'black', width: '50%'},
  buttonStyle: {marginTop: 12, padding: 12},
});



const mapDispatchToProps = (dispatch) => {
  return {
    loginApi: (name,password) => {
      dispatch(loginAction(name,password));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
