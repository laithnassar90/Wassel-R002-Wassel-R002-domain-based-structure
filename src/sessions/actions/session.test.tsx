// src/sessions/actions/session.test.ts
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../action-types'
import { APIEndpoints } from '../../constants/constants'
import {
  loginFromCookie,
  logInEmailBackend,
  logout,
  saveToLocalStorage,
} from './session'

describe('Session Actions', () => {
  const email = 'harry.potter@a.com'
  const access_token = 'access_token'
  const dispatch = (x: any) => x
  const getState = () => ({})

  describe('loginFromCookie', () => {
    const data = { email, access_token }
    const asyncAction = loginFromCookie(data)
    const action = asyncAction(dispatch, getState)

    it('should have LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE types', () => {
      expect([LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]).toContain(action.type)
    })
  })

  describe('logInEmailBackend', () => {
    const password = 'password'
    const data = { email, password }
    const asyncAction = logInEmailBackend(data)
    const action = asyncAction(dispatch, getState)

    it('should have LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE types', () => {
      expect([LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]).toContain(action.type)
    })
  })

  describe('logout', () => {
    const asyncAction = logout()
    const getStateWithSession = () => ({ session: { email, access_token } })
    const action = asyncAction(dispatch, getStateWithSession)

    it('should have LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE types', () => {
      expect([LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE]).toContain(action.type)
    })
  })

  describe('saveToLocalStorage', () => {
    afterEach(() => {
      localStorage.clear()
    })

    const asyncAction = saveToLocalStorage(email, access_token)
    asyncAction(dispatch, getState)

    it('saves email and access_token to localStorage', () => {
      expect(localStorage.getItem('email')).toBe(email)
      expect(localStorage.getItem('access_token')).toBe(access_token)
    })
  })
})
