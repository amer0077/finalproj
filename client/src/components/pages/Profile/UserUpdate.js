import {useDispatch} from 'react-redux'
import React, {useState} from 'react'

import Modal from 'react-bootstrap/Modal'

import { editUser } from '../../../js/actions/userAction'

import { Button } from 'react-bootstrap';


const UserUpdate =({user})=>{
   const dispatch = useDispatch()


   const [newprofile , setNewprofile]=useState(user)


   const handlechange=(e)=>{
    setNewprofile({...newprofile , [e.target.name]:e.target.value})
    
}

console.log(user)
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const UPDATE=()=>{
dispatch(editUser(user._id, newprofile))
   
setShow(false)

   }
    return (
        <>



 

  
  
     
          <Modal.Title>Update your Profile  </Modal.Title>

        <Modal.Body> 

<input type="text"  value={newprofile.name} name="name" placeholder="your title" onChange={handlechange} />
<br/>
<input type="text" value={newprofile.email} name='email' placeholder="your email" onChange={handlechange} />
<br/>

<input type="text" value={newprofile.imgUser} name='imgUser' placeholder="your URL img" onChange={handlechange} />
<br/>

<br/>

<hr/>
<Button variant="secondary" onClick={UPDATE}style={{textAlign:"center"}}>
          update Profile
          </Button>
         
        </Modal.Body>
      
        
       
  
 
  
    
 



<br/><br/><br/>

        </>
    )
}

export default UserUpdate