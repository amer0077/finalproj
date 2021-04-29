import React,{useState} from 'react'
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addPost } from '../../../../js/actions/PostAction';


function AddPost({ client  }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [desc, setDesc] = useState("");
   
  
const user = client._id
const nameU = client.name



    const dispatch = useDispatch();
const add=()=>{
    dispatch(addPost({name,imgUrl,desc,  user , nameU }))
   
    toggle()
    setName('');
    setImgUrl('');
    setDesc('')

    history.push('/');
   
};
const history = useHistory();
    return (
<div>


       <h4>New Post</h4> 
        
        <ModalBody>
       
                   <br/>
                    <input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name post" 
                    />
     
     <br/>
                    <input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="text" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="Image post" 
                    />
     
     <br/>
                    <input 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    type="text" 
                    name="desc" 
                    id="desc" 
                    placeholder="set your description" 
                    />
         

         
         <br/>
          
      <hr/>
    
         <Button color="primary" onClick={add}>ADD</Button>{' '}
        </ModalBody>
     
     
       
      
     
      <br/> <br/> 
</div>

)}
     

export default AddPost
