import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { registerUser } from '../../js/actions/userAction';
import { Button } from 'react-bootstrap';
import './SignUp.css'

const RegisterModal = () => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgUser, setImgUser] = useState('');


  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    const newUser = { name, email, password,imgUser };
    dispatch(registerUser(newUser));
    history.push("/")
    setEmail('');
    setName('');
    
    setPassword('');
    setImgUser('');
  };

  return (
    <div>
  
  <br/> <br/> <br/> 

      <div class="containerS">

<div id="signup">

    <div class="header">
    <br/>
        <div class="checkboxy">
            <label>I have account <Link to="/login">Sign in</Link></label>
        </div>
        
        
        
    </div>
    
    <div class="sep"></div>

    <div class="inputs">
    
<label>Name</label>
    <input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                
                onChange={(e) => setName(e.target.value)}
              />
           
           
           <label>Email</label>
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            <label>Password</label>
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
               
                onChange={(e) => setPassword(e.target.value)}
              />
         <label>image URL</label>
              <input
                type="text"
                value={imgUser}
                name="imgUser"
                id="imgUser"
                placeholder="img URL"
              
                onChange={(e) => setImgUser(e.target.value)}
              />
        
        
        
       
        <Button
                color='info'
             
                onClick={handleRegister}
              >
                Sign up
              </Button>
        
    
  
        </div>

</div>

</div>


     
    </div> 
  );
};

export default RegisterModal;