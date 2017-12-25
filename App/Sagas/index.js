import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'


import {LoginType, LoginFunction} from '../Containers/Login/Login.Action'
import LoginApi from '../Containers/Login/Login.Api'

import {ListItemType, ListItemFunction} from '../Containers/ListItem/ListItem.Action'
import ListItemApi from '../Containers/ListItem/ListItem.Api'


/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),


    takeLatest(LoginType.LOGIN,LoginFunction.login,LoginApi.create()),


    takeLatest(ListItemType.LIST_ITEM_FETCH,ListItemFunction.getData,ListItemApi.create())
  ])
}
