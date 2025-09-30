import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  CURRENT_USER_UPDATE_SUCCESS,
} from '../action-types';

export const initialState = {
  isStarted: false,
  isFetching: false,
  errors: [],
  isAuthenticated: false,
  id: null,
  access_token: null,
  email: null,
  role: null,
};

export function session(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
        errors: [],
      };

    case LOGIN_SUCCESS: {
      const { id, access_token, email, role } = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errors: [],
        id,
        access_token,
        email,
        role,
      };
    }

    case LOGIN_FAILURE: {
      const errorMessage =
        action.error?.response?.data?.error || 'Login failed';
      return {
        ...initialState,
        errors: [errorMessage],
      };
    }

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isStarted: true,
      };

    case CURRENT_USER_UPDATE_SUCCESS: {
      const { email } = action.payload.data;
      return {
        ...state,
        email,
        errors: [],
        isFetching: false,
        isAuthenticated: true,
      };
    }

    default:
      return state;
  }
}
