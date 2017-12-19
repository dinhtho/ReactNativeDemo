import React, { Component } from 'react'
import {ProfileAction} from './Profile.Actions'
import {
 Text,
 TextInput,
 View,
 TouchableOpacity,
} from 'react-native'


export default class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state ={
      username: '',
      password: ''
    }
  }


  render () {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
            <Text>Username</Text>
            <TextInput 
            style={{width:200,height:30}} 
            onChangeText={(text)=>this.setState({username:text})}/>

            <Text>Password</Text>
            <TextInput
             style={{width:200,height:30}}
             onChangeText ={(text)=>this.setState({password:text})}
            
          />
          <TouchableOpacity 
            style={{width:200, height:30,backgroundColor:'blue',justifyContent:'center',alignItems: 'center'}}
            onPress ={()=>this.props.onLogin(ProfileAction.request(this.state.username,this.state.password))}
            >
            <Text>Login</Text>
          </TouchableOpacity>
          <Text style ={{marginTop:10,backgroundColor:'grey'}}>this.props.result</Text>
        </View>
      );
      
  }

  //</editor-fold>
}

function mapStateToProps (state) {
  result: state.login.data
  // console.log('login', state)
  return {
   
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (obj) => dispatch(obj)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
