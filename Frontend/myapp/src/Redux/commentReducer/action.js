import { COMMENT_FAILURE, COMMENT_REQUEST, GET_COMMENT_SUCCESS, POST_COMMENT_REQUEST,  } from "./actionType"
import axios from "axios"

export const postComment=(comment)=>(dispatch)=>{
    dispatch({type:COMMENT_REQUEST})
    axios.post("http://localhost:8080/comments",comment)
    .then((res)=>{
       console.log(res.data)
       dispatch({type:POST_COMMENT_REQUEST,payload:res.data})
    })
    .catch((err)=>{
     dispatch({type:COMMENT_FAILURE})
    })
    
}

export const getComment=(id)=>(dispatch)=>{
  dispatch({type:COMMENT_REQUEST})
  axios.get(`http://localhost:8080/comments?postId=${id}`)
  .then((res)=>{
   console.log(res.data)
   dispatch({type:GET_COMMENT_SUCCESS,payload:res.data})
  }).catch((err)=>{
   dispatch({type:COMMENT_FAILURE})
  })
}