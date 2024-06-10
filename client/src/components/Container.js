import React, { useEffect } from 'react'
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import {init,subcribeInitialMessages,subscribeChat} from "../socketApi"
import {useChat} from "../context/chatContext"
function Container() {
  const {setMessages}=useChat()
  useEffect(()=>{
    init()
    subscribeChat((message)=>{
      setMessages((prevState)=>[...prevState, {message}])
    })
    subcribeInitialMessages((messages)=>{
      setMessages(messages)
    })
  },[])
  return (
    <div className='App'>
        
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container