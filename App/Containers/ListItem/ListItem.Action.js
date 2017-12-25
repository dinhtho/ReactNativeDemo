import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'

import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  listItemFetch: ['get'],
  listItemSuccess: ['data'],
  listItemFailure: ['error']
});

export const ListItemType = Types;
export const ListItemAction = Creators;
export const ListItemFunction = {
  getData
};


function* getData(api, action) {
  const response = yield call(api.getList);
  if (response.ok) {
    if (response.data) {
      console.log(response.data);
      yield put(ListItemAction.listItemSuccess(response.data.data));
    } else if (response.error) {
      yield put(ListItemAction.listItemFailure(response.error));
    }
  }
}

