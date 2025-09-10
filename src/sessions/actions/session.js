import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../action-types'
import { APIEndpoints } from '../../constants/constants'

export function loginFromCookie(data) {
  return (dispatch, getState) => {
    return dispatch({
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      payload: {
        request: {
          url: `${APIEndpoints.SESSIONS}/get_user`,
          headers: {
            'X-User-Email': data.email,
            'X-User-Token': data.access_token
          },
          timeout: 10000
        }
      }
    }).catch(error => {
      console.error('Cookie login failed:', error)
      localStorage.clear()
      return Promise.reject(error)
    })
  }
}

export function logInEmailBackend(data) {
  return (dispatch, getState) => {
    return dispatch({
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      payload: {
        request: {
          method: 'post',
          url: APIEndpoints.LOGIN_EMAIL,
          data: data,
          timeout: 10000
        }
      }
    }).catch(error => {
      console.error('Login failed:', error)
      const errorMessage = (error.response && error.response.data && error.response.data.message) || 'Login failed. Please try again.'
      return Promise.reject(errorMessage)
    })
  }
}

export function logInFbBackend(data) {
  return (dispatch, getState) => {
    return dispatch({
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      payload: {
        request: {
          method: 'post',
          url: APIEndpoints.LOGIN_FB,
          data: {
            uid: data.id,
            provider: 'facebook',
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name
          }
        }
      }
    })
  }
}

export function logout() {
  return (dispatch, getState) => {
    const { session } = getState()
    return dispatch({
      types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
      payload: {
        request: {
          method: 'delete',
          url: APIEndpoints.SESSIONS,
          headers: {
            'X-User-Email': session.email,
            'X-User-Token': session.access_token
          },
          timeout: 5000
        }
      }
    }).catch(error => {
      console.error('Logout failed:', error)
      // Clear local storage even if logout fails
      localStorage.clear()
      return Promise.resolve()
    })
  }
}

export function saveToLocalStorage(email, access_token) {
  return () => {
    localStorage.setItem('email', email)
    localStorage.setItem('access_token', access_token)
  }
}
