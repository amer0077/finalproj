import React from 'react'
import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup,Input } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux';
import { editPost } from '../../../js/actions/PostAction';



const EditPost=({post}) =>{

const dispatch = useDispatch();
const [name, setName] = useState(post.name);
const [imgUrl, setImgUrl] = useState(post.imgUrl);
const [desc, setDesc] = useState(post.desc);


const [modal, setModal] = useState(false);

console.log(desc)

const toggle=()=>{
    setModal(!modal)
    setName(post.name)
    setImgUrl(post.imgUrl)
    setDesc(post.desc)
 
   

}

const edit=()=>{
    const editedPos = {name,imgUrl,desc}
    dispatch(editPost(post._id,editedPos));
    toggle();
}
// const user = useSelector((state) =>state.authReducer.user);
return (
    <div>
      
    <Button  color="secondary" onClick={toggle}>Update</Button>
   

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Edit post </ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                   
                    <input   value={name} onChange={(e)=>setName(e.target.value)} type="text"   name="name"  id="name" 
                    placeholder="Name post" 
                    />
                </FormGroup>
                <FormGroup>
                 
                    <input   value={imgUrl}  onChange={(e)=>setImgUrl(e.target.value)} type="text"   name="imgUrl"  id="imgUrl" 
                    placeholder="imgUrl post" 
                    />
                </FormGroup>
             
                <FormGroup>
                 
                    <input  value={desc}  onChange={(e)=>setDesc(e.target.value)} type="text"  name="desc"  id="desc" 
                    placeholder="description post" 
                    />
                </FormGroup>

              

            </Form>
        </ModalBody>
        <ModalFooter>
        <Button onClick={edit} color="primary" >Save</Button>
      
        </ModalFooter>
    </Modal>
    </div>
);

}

export default EditPost
