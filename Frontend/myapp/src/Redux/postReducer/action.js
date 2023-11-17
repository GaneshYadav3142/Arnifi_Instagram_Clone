import { GET_POSTS_SUCCESS, POSTS_FAILURE, POSTS_REQUEST, POST_POSTS_REQUEST } from "./actionType"
import axios from "axios"

export const postImage=(post)=>(dispatch)=>{
    dispatch({type:POSTS_REQUEST})
    axios.post("http://localhost:8080/posts",post)
    .then((res)=>{
       console.log(res.data)
       dispatch({type:POST_POSTS_REQUEST,payload:res.data})
    })
    .catch((err)=>{
     dispatch({type:POSTS_FAILURE})
    })
    
}

export const getPost=()=>(dispatch)=>{
  dispatch({type:POSTS_REQUEST})
  axios.get("http://localhost:8080/posts")
  .then((res)=>{
   console.log(res.data)
   dispatch({type:GET_POSTS_SUCCESS,payload:res.data})
  }).catch((err)=>{
   dispatch({type:POSTS_FAILURE})
  })
}