import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../js/actions/PostAction'
import EditPost from './EditPost'

import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button, Alert } from 'react-bootstrap';

import '../Admin.css'

const PostList = ({post}) => {


const dispatch = useDispatch()

    const delet=()=>{
        dispatch(deletePost(post._id))
        }


      

        const [show, setShow] = useState(false);


    return (
   <>


    <Alert  variant="info" >
    <Alert.Heading></Alert.Heading>
   

  
 <div className="puttext" >
   
   <img src= {post.imgUrl} style={{width:190}}/>
   

 
   
  

  <div style={{textAlign:"left"}}>
   {post.desc}
   </div>
   </div>
    
  
<hr/>
<div style={{textAlign:"left"}}>
<strong>Name User : </strong>{post.nameU}  
 </div>
    <hr />
    <div className="d-flex justify-content-end">
     
      <div style={{marginLeft : 7 , marginRight : 7}}>
      <EditPost  post={post}/>
      </div>
      <Button  variant="danger" onClick={delet}>
     Delete
      </Button>

    </div>
  </Alert>


      

</>
    )
}

export default PostList
