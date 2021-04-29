import { GET_POST } from "../actiontype/ActionType";

const initState={
    posts:[],
};

export const PostReducer= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_POST:
            return{
                ...state,
                posts:payload,
            };
      

        default:
            return state;
    }
};
export default PostReducer;