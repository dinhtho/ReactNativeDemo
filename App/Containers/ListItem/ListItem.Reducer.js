import { ListItemType } from './ListItem.Action'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  issucceeded: false,
  data: null,
  error: null
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [ListItemType.LIST_ITEM_FETCH]: (state, action) => {
    return {
      ...state,
      issucceeded: false,
      data: null,
      error: null
    }
  },
  [ListItemType.LIST_ITEM_SUCCESS]: (state, action) => {
    console.log("redu1: " + JSON.stringify(action)); // action={"type":"SUCCESS","data":"2017-12-25T09:57:09+0000"}
    return {
      ...state,
      issucceeded: true,
      data: action.data,
      error: null
    }
  },
  [ListItemType.LIST_ITEM_FAILURE]: (state, action) => {
    // console.log("redu2: " + action.error)
    return {
      ...state,
      issucceeded: false,
      data: action.error,
      error :  null
    }
  }
});
