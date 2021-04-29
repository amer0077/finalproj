import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { loginUser } from '../../js/actions/userAction';
import { Button } from 'react-bootstrap';
const LoginModal = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  const history = useHistory();

  const LoginMe = () => {
  dispatch(loginUser({ email, password }));
   history.push('/');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
    <br/> <br/> <br/> 
    <div class="containerS">

<div id="signup">

    <div class="header">
    <br/>
    <div class="checkboxy">
            <label>I Dont have account  <Link to="/Register">Register</Link></label>
        </div>
        
        
        
    </div>
    
    <div class="sep"></div>

    <div class="inputs">
    <label>Email</label>
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder=" Email"
            
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
              
              <Button
                color="info"
                // id="submit"
                onClick={LoginMe}
              >
                Sign in
              </Button>

          
    
  
        </div>

</div>

</div>
    </div>
  );
};

export default LoginModal;