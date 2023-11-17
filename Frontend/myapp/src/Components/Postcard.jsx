import { Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "../Styles/Postcard.css"
export const Postcard = ({name,image,title}) => {
   const [like, setLike]=useState(false)
    const handelLiked=()=>{
        setLike(!like)
        if(!like){
            alert("Post Liked")
        }
        else{
            alert("Post Removed from Liked")
        }
    }
  return (
    <div className='post-container'>
       <h2 className='header'>{name}</h2>
       <div className='image-container'>
        <img src={image} alt="image" />
       </div>
       <div className='footer'>
        <h4>{title}</h4>
        <HStack spacing='24px'>
        <Button className={like ? "button liked" : "button like"} size={"xs"}  onClick={handelLiked}>{like ? "Liked" : "Like"}</Button>
        <Button className='button share' size={"xs"}>Share</Button>
        </HStack>
       </div>
    </div>
  )
}
