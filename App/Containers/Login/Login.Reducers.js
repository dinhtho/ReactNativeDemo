import {LoginType} from './Login.Actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: ""
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginType.LOGIN]: (state, action) => {
    return {...state,
      data: null
    }
  },
  [LoginType.SUCCESS]: (state, action) => {
    console.log("redu1: "+action.data)
    return {...state,
      data: action.data
    }
  },
  [LoginType.FAILURE]: (state, action) => {
    console.log("redu2: "+action.error)
    return {...state,
      data: action.error
    }
  }
});
