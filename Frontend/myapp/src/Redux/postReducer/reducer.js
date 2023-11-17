import { POSTS_REQUEST, POSTS_FAILURE, GET_POSTS_SUCCESS, POST_POSTS_REQUEST } from "./actionType"





const initState={
    posts:[],
    isLoading:false,
    isError:false,
   
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case POSTS_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false

            }
        }
        case GET_POSTS_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                posts:payload

            }
        }
        case POST_POSTS_REQUEST:{
            return{
                ...state,
                isLoading:false,
                posts:[...state.posts,payload]

            }
        }
        case POSTS_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true

            }
        }

        default:{
            return state
        }
    }
}