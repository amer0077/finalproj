
import React,{useEffect} from 'react'
import {useSelector , useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

import { filterPost} from '../../../js/actions/PostAction';
import AddPos from './post/AddPos'

import PosList from './post/PostList'
import UserUpdate from './UserUpdate'
import './user.css'





const UserProfile=()=>{
    
    const dispatch = useDispatch();
    useEffect(() => {
              
              dispatch(filterPost(user._id))
           }, [])


const user = useSelector((state) => state.userReducer.user);

const posts = useSelector(state => state.PostReducer.posts.post);


    return (
        <div>


<div className="allme">
 
  <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png")'}} />
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src={user.imgUser} alt="Circle Image" className="img-raised rounded-circle img-fluid" style={{width : 300}} />
              </div>
              <div className="name">
                <h3 className="title">{user.name}</h3>
                <h6>{user.email}</h6>
               
              </div>
            </div>
          </div>
        </div>
       <br/> <br/>
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile-tabs">
              <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                  
                    update Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                   
                   Add Post
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                    
                    Liste Post
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content tab-space">
          <div className="tab-pane active text-center gallery" id="studio">
            <div className="">
             
            <UserUpdate  user={user}/>
             
            </div>
          </div>
          <div className="tab-pane text-center gallery" id="works">
            <div className="">
            <AddPos client={user}/>
            </div>
          </div>
          <div className="tab-pane text-center gallery" id="favorite">
            <div className="">
             
            {posts && posts.map(post=> <PosList key={post._id} post={post}/>)}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

        </div>
    )
}

export default UserProfile


{/* <div className="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                             <img src={user.imgUser} alt="this this photo"/> 
                          
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                  <h3> Welcome  <strong>{user.name}</strong>  </h3>  
                                    </h5>
                                  <br/> <br/> <br/> <br/> 
                                    <p class="proile-rating"> <span></span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                              
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Profile Information</a>
                                <br/>
                             
                                <Alert  variant="success" style={{ width:530 }} >
        <Alert.Heading></Alert.Heading>
        <p>
        <strong>Email :</strong> {user.email}
                             <br/>
        
        </p>
        <hr />
     
      </Alert>
                             <br/>
                          



                                </li>

                               <hr/>
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pub" role="tab" aria-controls="home" aria-selected="true">Add your Post</a>
<br/>
                          
                              
                     <AddPos client={user}/>
                     <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Liste Post</a>
                                <br/>
                          

                                {posts && posts.map(post=> <PosvList key={post._id} post={post}/>)}


                                </li>

                 
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
             <div style={{ display: "flex" , justifyContent:"space-between"  }}  >
               
                 
                    <UserUpdate  user={user}/>
                    </div>                      
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                           
                           
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="pub" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                           
                                           
                                        </div>
                                       
                                       
                                      
                                       
                            </div>
                            <div class="tab-pane fade" id="msg" role="tabpanel" aria-labelledby="profile-tab">
                                       
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div> */}