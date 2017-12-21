import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'

import {createActions} from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  login: ['login'],
  success: ['data'],
  failure: ['error']
});

export const LoginType = Types;
export const LoginAction =  Creators;
export const LoginFunction = {
  login
};


function * login (api, action) {
  const username = action.login.username;
  const password = action.login.password;
  console.log(JSON.stringify(action));
  console.log("username"+username)
  console.log("username"+password)
  const response = yield call(api.login, username, password);
  console.log("username"+(JSON.stringify(response.data)));
  if(response){
    if(!response.data.error){
      if(response.data.data.last_login)
        yield put(LoginAction.success(response.data.data.last_login));
    }else{
      if(response.data.errors[0].errorMessage)
        yield put(LoginAction.failure(response.data.errors[0].errorMessage));
    }
  }
}

