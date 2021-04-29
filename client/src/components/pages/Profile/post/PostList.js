import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../../js/actions/PostAction'
// import Editpost from './EditPos'
import { useHistory } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../Admin/Admin.css'

const PostList = ({post}) => {

  const history = useHistory();

const dispatch = useDispatch()
    const delet=()=>{
        // dispatch(deletePost(post._id))
        history.push('/deletpos');
        }


      

        const [show, setShow] = useState(false);


    return (
   <>




 
  
 






    <Alert  variant="info" >
    
<hr/>
  
 <div className="puttext" >
   
   <img src= {post.imgUrl} style={{width:190}}/>
   

 
   
  

  <div style={{textAlign:"left"}}>
   {post.desc}
   </div>
   </div>
    <br/>
<hr/>
    <div className="d-flex justify-content-end">
    
      <div style={{marginLeft : 7 , marginRight : 7}}>
      {/* <EditPost post={post}/> */}
      </div>
      <Link to={`/deletpos/${post._id}`}>
      <Button  variant="danger" onClick={delet}>
      Delete Post
      </Button>
      </Link>
    </div>
  </Alert>


      

 


</>
    )
}

export default PostList
