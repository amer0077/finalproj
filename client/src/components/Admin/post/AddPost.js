import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {useDispatch,useSelector} from 'react-redux';
import { addPost } from '../../../js/actions/PostAction';

function AddPost({types}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [desc, setDesc] = useState("");
   
  
    const dispatch = useDispatch();
const add=()=>{
    dispatch(addPost({name,imgUrl,desc }))
    toggle()
    setName('');
    setImgUrl('');
    setDesc('')
  

};

    return (
<div>

<Button color="info" onClick={toggle}>Add post</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>New Post</ModalHeader>
        <ModalBody>
        <Form 
        >
        <FormGroup >
                   
                    <input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name post" 
                    />
        </FormGroup>
        <FormGroup>
                  
                    <input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="text" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="Image post" 
                    />
        </FormGroup>
      
       
        <FormGroup>
                
                    <input 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    type="text" 
                    name="desc" 
                    id="desc" 
                    placeholder="set your description" 
                    />
            </FormGroup>

         

         
      
        </Form>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>ADD</Button>{' '}
       
        </ModalFooter>
      </Modal>
</div>

)}
     

export default AddPost
