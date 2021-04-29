import {LOGIN_USER,REGISTER_USER,LOGOUT_USER, GET_AUTH_USER, AUTH_ERRORS, GET_ALLUSERS} from '../actiontype/ActionType';
  
  const initialState = {
    token: localStorage.getItem('token'), 
    user: null,
    isAuth: false,
    msg: null,
    users:[]
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    
      case REGISTER_USER:
      case LOGIN_USER:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
        
          isAuth: true,
          msg: payload.msg,
          ...payload,
        };
        case GET_AUTH_USER:
          return {
              ...state,
             
              isAuth: true,
              ...payload,
          };
        case GET_ALLUSERS:
        return {
          ...state,
          users:payload,
        };
      case AUTH_ERRORS:
      case LOGOUT_USER:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuth: false,
          user: null,
        
        };
      default:
        return state;
    }
  };
  
  export default authReducer;