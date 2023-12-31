import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { getPost, postImage } from '../Redux/postReducer/action'
import { Postcard } from '../Components/Postcard'
import { Button } from '@chakra-ui/react'
import "../Styles/Postpage.css"
import { getComment, postCommentFunction } from '../Redux/commentReducer/action'
export const Postpage = () => {

   const postData=useSelector((store)=>store.postReducer.posts)
   const postComment=useSelector((store)=>store.commentReducer.comments)
   const [toggleform,setToggleForm]=useState(false)
   const [togglecomment, setToggleComment]=useState({})
   const [toggleAddComment ,setToggleAddComment]=useState(false)
   const [comment,setComment]=useState("")
   const [imageurl,setImageURL]=useState("")
   const [title,setTile]=useState("")
   const name=localStorage.getItem("name")
   const email=localStorage.getItem("email")
   console.log(postData)
   const dispatch=useDispatch()

   const handelToggle=()=>{
    setToggleForm(!toggleform)
   }

   const handelToggleComment=(id)=>{
    setToggleComment((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
    dispatch(getComment(id))
   }

   const handelToggleAddComment=()=>{
    setToggleAddComment(!toggleAddComment)
   }

   const handelSubmit=(e)=>{
    e.preventDefault()
     dispatch(postImage({name,image:imageurl,title}))
    setToggleForm(false)
  }

  const handelSubmitComment=(id)=>{
    console.log("Yes")
    dispatch(postCommentFunction({postId:id,name:name,email:email,body:comment}))
    setComment("")
  
  }

   useEffect(()=>{
    dispatch(getPost())
    
   },[])

  return (
    <div className='container'>
      <div className='add-post'>
        <Button colorScheme="whatsapp" onClick={handelToggle}>Hey! {name} Add Post</Button>
        {
          toggleform && (<div className='add-form'>
            <form onSubmit={handelSubmit}>
            <div>
            <label htmlFor="image">ImageURL</label>
            <input type="text" value={imageurl} id="image" placeholder='Enter the image Url to post' required onChange={(e)=>setImageURL(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={title} id="title" placeholder='Enter post title' required onChange={(e)=>setTile(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
            </form>
          </div>)
        }
      </div>
     {
      postData.map((el,i)=>{
        return(
          <div className='posts' key={el.id}>
          <Postcard {...el}/>
          <Button  onClick={()=>handelToggleComment(el.id)}>Comments</Button>
          {togglecomment[el.id] && <div key={el.id}> {
           postComment.map((comment)=>(<li key={comment.id}>{comment.body}---{comment.name}</li>))
           }
           <Button onClick={handelToggleAddComment}>Add Comments</Button>
           {
            toggleAddComment && (<div className='comment-form'>
               <input type="text" value={comment} id="comment" placeholder='Enter Comment' required onChange={(e)=>setComment(e.target.value)}/>
               <button onClick={()=>handelSubmitComment(el.id)}>Submit</button>
              
            </div>)
           }
           </div>}
          </div>
        )
      })
     }
    </div>
  )
}
