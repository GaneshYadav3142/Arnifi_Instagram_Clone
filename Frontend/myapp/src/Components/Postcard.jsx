import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Postcard.css"
export const Postcard = ({name,image,title}) => {
  return (
    <div className='post-container'>
       <h2 className='header'>{name}</h2>
       <div className='image-container'>
        <img src={image} alt="image" />
       </div>
       <div className='footer'>
        <h4>{title}</h4>
        <HStack spacing='24px'>
        <Button className='button like' size={"xs"}>Like</Button>
        <Button className='button share' size={"xs"}>Share</Button>
        </HStack>
       </div>
    </div>
  )
}
