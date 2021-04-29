import axios from 'axios';
import {LOGIN_USER,REGISTER_USER,LOGOUT_USER,GET_AUTH_USER,AUTH_ERRORS,GET_ALLUSERS} from '../actiontype/ActionType';


//------------------------------------- Register USer---------------------------------------------
export const registerUser = (formData) => async (dispatch) => {
 
  try {
    const res = await axios.post('/api/user/register', formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));

  }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
    
  }
};
//-----------------------------get user------------
export const getAllUsers=()=>async (dispatch)=>{
  try {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res=await axios.get('api/user/alluser',config);
    dispatch({
      type: GET_ALLUSERS,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
 //-----------------------------------delete user--------------------------------- 

export const deleteAllUsers=(idAllUsers)=>(dispatch)=>{
  const config = {
      headers: {
      'x-auth-token': localStorage.getItem('token'),
      },
  };
  axios.delete(`api/user/delete/${idAllUsers}`,config)
  .then(res=>dispatch(getAllUsers()))
  .catch(Error=>console.log(Error))
  }
  

//---------------------------------------- Login User----------------------------------------
export const loginUser = (formData) => async (dispatch) => {
  

  try {
    const res = await axios.post('/api/user/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err)=>alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

//------------------------------------------ Get auth user-----------------------------------------
export const getAuthUser = () => async (dispatch) => {
 

  try {
    
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
   
    const res = await axios.get('/api/user/user', config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};


//-----------------------------logout-----------------------------------
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

//----------------------------------edituser-----------------------------
export const editUser=(iduser,editU)=>async (dispatch)=>{
  try {
   const config = {
       headers: {
       'x-auth-token': localStorage.getItem('token'),
       },
   };
      const res = await axios.put(`/api/user/edit/${iduser}`,editU,config)
       dispatch( getAllUsers())
       
  } catch (error) {
   console.log(error.message)
  }
}

    //----------------------------filteruser---------------------------
    export const filterUser=(posid)=>async(dispatch)=>{
      try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
           const res = await axios.get(`/api/user/filter/${posid}`,config)
            dispatch( getAllUsers())
            
       } catch (error) {
        console.log(error.message)
       }
     }
   
    
      