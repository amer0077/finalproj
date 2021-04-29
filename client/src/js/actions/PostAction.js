import axios from 'axios';
import {GET_POST} from '../actiontype/ActionType'

//----------------------------getPost---------------------------
export const getPost=()=>(dispatch)=>{
axios.get('/api/post')
.then(res=>dispatch({type:GET_POST,payload:res.data}))
.catch(Error=>console.log(Error))
}


//-----------------------------addPost----------------------------------
export const addPost=(newPost )=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/post/add',newPost,config)
   
    .then(res=>dispatch( getPost()))
 
    .catch(Error=>console.log(Error))
}
//--------------------------------deletePost----------------------------
    export const deletePost=(idPost)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/Post/delete/${idPost}`,config)
        .then(res=>dispatch( getPost()))
        .catch(Error=>console.log(Error))
        }

//----------------------------------editPost-----------------------------
    export const editPost=(idPost,editedPort)=>async (dispatch)=>{
    try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.put(`/api/post/edit/${idPost}`,editedPort,config)
            dispatch( getPost())
            
    } catch (error) {
        console.log(error.message)
    }
    }


    //----------------------------filterPost--------------------------
export const filterPost=(userid)=>(dispatch)=>{
    axios.get(`/api/post/filter/${userid}`)
    .then(res=>dispatch({type:GET_POST,payload:res.data}))
    .catch(Error=>console.log(Error))
    }
    