import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../../js/actions/PostAction'

 import './Posdelet.css'

function Posdelet({match}) {
    const [show, setShow] = useState(true);

const history = useHistory();


const dispatch = useDispatch()
    const delet=()=>{
        dispatch(deletePost(match.params.id))
        history.push('/');
        }



const cancel =()=>{
    history.push('/userprofile');
}

    return (
<div className="boody">
<br/><br/>
<hr/>
<h3>Are you sure you want delete this post !!</h3>
<hr/>

<div>
  <div id="container">
    <div id="success-box">
    
      
  
      
      <button className="button-box" onClick={delet}><h1 className="green">Delete</h1></button>
    </div>
    <div id="error-box">
    
     
    
    
      <button className="button-box" onClick={cancel}><h1 className="red">Cancel</h1></button>
    </div>
  </div>
</div>




</div>

)}
     

export default Posdelet
