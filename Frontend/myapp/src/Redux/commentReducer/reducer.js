import { COMMENT_FAILURE, COMMENT_REQUEST, GET_COMMENT_SUCCESS, POST_COMMENT_REQUEST } from "./actionType"





const initState={
    comments:[],
    isLoading:false,
    isError:false,
   
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case COMMENT_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false

            }
        }
        case GET_COMMENT_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                comments:payload

            }
        }
        case POST_COMMENT_REQUEST:{
            return{
                ...state,
                isLoading:false,
                comments:[...state.comments,payload]

            }
        }
        case COMMENT_FAILURE:{
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