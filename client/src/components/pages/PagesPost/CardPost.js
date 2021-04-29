import React,{useState , useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button , Alert } from 'react-bootstrap';

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



import './post.css'


const Cardpost=({post})=> {
   
    const dispatch = useDispatch()
 

  
 

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    
    return (

      

<span>

<label ><strong>Name User</strong> {post.nameU}</label>
<br/>
  <img src={post.imgUrl} alt="client" />

  <div className="">
    <label style={{paddingTop: 5}}> {post.name}</label>
    <br/>
    <label style={{paddingTop: 5}}><strong>Description Memories :</strong> <br/>{post.desc}</label>
   

    <div >

 
    </div>
  </div>
</span>



 )
}

export default Cardpost;
