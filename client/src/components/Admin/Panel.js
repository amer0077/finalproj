import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';

import { getAllUsers } from '../../js/actions/userAction';

import { addPost, getPost } from '../../js/actions/PostAction';

 import AddPost from './post/AddPost';


import PostList from './post/PostList';
import UserList from './UserList';




const Panel = () => {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllUsers());
 
    dispatch(getPost())



}, [])

const user = useSelector(state => state.userReducer.user);
const users = useSelector(state => state.userReducer.users.users);
const posts = useSelector(state => state.PostReducer.posts.post);



    return (
        // (!user)?<p>you dont have any user</p>:
        <div >
             
          
         


          
            <h3 style = {{ color : 'red'}}>LIST OF USERS</h3>
            
       <div className="outil3">
         
       {users && users.map(users=> <UserList key={users._id} users={users}/>)}
      </div>
     
        <div >
        <div >
           
          
         
           <br/>
          
             <br/>
        </div>
            
  
     
        </div>
        <br/><br/>
        <div>
    <div >
      
  <br/>
  <AddPost/>
        <br/>
        </div>
  
       {posts && posts.map(post=> <PostList key={post._id} post={post} />)}
     <br/> <br/> <br/>
        </div>
        
        </div>
    )
}

export default Panel
