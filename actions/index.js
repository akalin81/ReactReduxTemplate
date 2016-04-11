import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import { checkHttpStatus, parseJSON } from '../utils'
import jwtDecode from 'jwt-decode'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export const LOGIN_GOOD = "LOGIN_GOOD"
export const RESET_STATE = "RESET_STATE"
export const LOG_OUT = 'LOG_OUT'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'

export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}

function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginSuccess(token)
{
  localStorage.setItem('token', token);
  return {
    type: LOGIN_GOOD,
    token: token
  }
}

export function logOut()
{
  localStorage.removeItem('token');
  return {
    type: LOG_OUT
  }
  browserHistory.push('/');
}

export function loginSucessPrev(token){
  return function (dispatch)
  {
      console.log('loginUserPrev');
      dispatch(loginSuccess(token));
      browserHistory.push('/test');
  }
}

// export function loginUser(usr, pwd, link){
//   return function (dispatch)
//   {
//       console.log('loginUser');
//
//       dispatch(loginSuccess(usr));
//       browserHistory.push(link);
//   }
// }


export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,

      status: error.response.status,
      statusText: error.response.statusText

  }
}

export function loginUser(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginUserRequest());
          console.log(email + '...' + password);
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                  console.log("Token From server: ");
                  console.log(response);
                    let decoded = jwtDecode(response.token);
                    console.log('This is decoded: ');
                    console.log(decoded._doc.username);
                    dispatch(loginSuccess(response.token));
                    browserHistory.push(redirect);
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {

                dispatch(loginUserFailure(error));
            })
    }
}

export function registerUser(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginUserRequest());
          console.log(email + '...' + password);
        return fetch('http://localhost:3000/auth/register/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                  //  let decoded = jwtDecode(response.token);
                  // console.log("111");
                  //  dispatch(loginSucessPrev(response.token));
                       dispatch(loginUser(email, password, '/test'));
                    //   console.log("2222 ");
                    //   dispatch(loginSuccess(response.token));
                    //   console.log("3333 ");
                    // browserHistory.push('/test');
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: e
                        }
                    }));
                }
            })
            .catch(error => {

                dispatch(loginUserFailure(error));
            })
    }
}



function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export function fetchPostsIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
  }
}
