import React, { Component } from 'react'
import { LoginAction } from './Login.Action'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'



class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginRequest :{
        username: '',
        password: ''
      }
    }
  }

  

  componentWillReceiveProps(nextProps){
    console.log("asd2")
    if(nextProps.result=="success"){
      this.props.navigation.navigate('ListItemScreen', {})
    }
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Username</Text>
        <TextInput
          style={{ width: 200, height: 30 }}
          onChangeText={(text) => this.setState(prevState => ({
            loginRequest: {
                ...prevState.loginRequest,
                username: text
            }
        }))} />

        <Text>Password</Text>
        <TextInput
          style={{ width: 200, height: 30 }}
          onChangeText={(text) => this.setState(prevState=>({
            loginRequest:{
              ...prevState.loginRequest,
              password: text
            }
          }))}

        />
        <TouchableOpacity
          style={{ width: 200, height: 30, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => this.props.onLogin(LoginAction.login(this.state.loginRequest))}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, backgroundColor: 'grey' }}>{this.props.result}</Text>
      </View>
    );

  }

  //</editor-fold>
}


function mapStateToProps(state) {
  console.log("asd1")
  return {
    result: state.login.data,
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (request) => dispatch(request)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
