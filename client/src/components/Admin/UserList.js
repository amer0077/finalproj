import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { deleteAllUsers} from '../../js/actions/userAction';
import Modal from 'react-bootstrap/Modal'
import { Button , Alert } from 'react-bootstrap';



 import './Admin.css'

const UserList = ({users}) => {


    const dispatch = useDispatch();

    const delet=(users_id)=>{
        dispatch(deleteAllUsers(users_id))
        }


         
    
    
          const [show, setShow] = useState(false);
    
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
        
    return (
      
            

<figure>
  <img src={users.imgUser} alt="client" />
  <div className="">
    <br/>
    <label > <strong>User Name : </strong> {users.name}</label>
    <br/>
    <label><strong>Email : </strong> {users.email}</label> 
    <div >
<br/>

  

  


   


    <Button variant="danger"className="btn"  onClick={()=>delet(users._id)}>Delete</Button>

  
    
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Information about user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert show={show} variant="success" >
    <Alert.Heading>Information</Alert.Heading>
    <p>
     
 
    </p>
    <hr />
    <div style={{textAlign:"left"}}>

    <p><strong>Name user :</strong>  {users.name}</p> 
    

   
    </div>
    <hr />
 
    
  </Alert>



        </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>
 
    </div>
  </div>
</figure>

    )
}

export default UserList
