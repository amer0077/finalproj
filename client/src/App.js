
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { getAuthUser } from './js/actions/userAction';
import AppNavBar from './components/NavBar/AppNavBar';
import Landpage from './components/pages/Landpage'
import Panel from './components/Admin/Panel';
import userProfile from './components/pages/Profile/UserProfile'
import Register from './components/user/Register'
import login from './components/user/Login'
import './App.css'
import Posdelet from './components/pages/Profile/post/Posdelet';


function App() {

  const dispatch = useDispatch();



  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
    
  
  }, []);

  

  return (
    <BrowserRouter>
      <AppNavBar />
      <Switch>
      <PrivateRoute exact path='/Panel' component={Panel}/>
      <Route exact path='/' component={Landpage}></Route>
      <PrivateRoute path='/userprofile' component={userProfile}/>
     
      <Route path="/Register" component={Register}></Route>
      <Route path="/login" component={login} ></Route>
      <Route path='/deletpos/:id' component={Posdelet}></Route>
      </Switch>
    </BrowserRouter>
  );
}                  

export default App;