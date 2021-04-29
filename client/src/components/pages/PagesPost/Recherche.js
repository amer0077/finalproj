import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getPost} from '../../../js/actions/PostAction';
import CardPost from './CardPost';

const Post = ({}) => {
    const [NameFilter, setNameFilter] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {;
    dispatch(getPost());
    
    }, []);
const myPost = useSelector((state) => state.PostReducer.posts.post);




    return (

<div className='m-4 flex align-item-center ' >
<div className="d-flex align-items-end flex-column" style={{height:50}} >
    <input type="text" placeholder="Search for a post..." 
        onChange={(e) => setNameFilter(e.target.value)}/> 
</div>
<br/><br/><br/>
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:'space-around'}}>
{
myPost && myPost.filter((el)=>(el.name.toUpperCase().includes(NameFilter.toUpperCase().trim())))
.map((post,i)=><CardPost post={post} key={i}/>)
}
</div>
    
       
</div>
    )
}

export default Post
