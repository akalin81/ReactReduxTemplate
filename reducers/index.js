import { combineReducers } from 'redux'
import {
  LOGIN_GOOD, RESET_STATE,LOGIN_USER_FAILURE, LOG_OUT, LOGIN_USER_REQUEST
} from '../actions'
import jwtDecode from 'jwt-decode'

function auth (state = { token : null, userName : null, isAuthenticated: false }, action) {

  switch (action.type) {
    case LOGIN_GOOD:
    {
      return Object.assign({}, state, {
        isAuthenticating: false,
        token: action.token,
        userName: jwtDecode(action.token)._doc.username,
        isAuthenticated: true

      });
    }
    case LOG_OUT:
    {
      return Object.assign({}, state, {
           'isAuthenticated': false,
           'token': null,
           'userName': null,
           'statusText': 'You have been successfully logged out.'
       });
    }
    case LOGIN_USER_FAILURE:
    {
      return Object.assign({}, state, {
           'isAuthenticating': false,
           'isAuthenticated': false,
           'token': null,
           'userName': null,
           'statusText': `Authentication Error: ${action.status} ${action.statusText}`
       });
    }
    case LOGIN_USER_REQUEST:
    {
      return Object.assign({}, state, {
          'isAuthenticating': true,
          'statusText': null
      });
    }
    default:
      return state
  }


}


const rootReducer = combineReducers({
  auth
})

export default rootReducer
