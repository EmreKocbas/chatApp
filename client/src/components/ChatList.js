
import styles from './styles.module.css';
import {useChat} from "../context/chatContext"
import ChatItem from './ChatItem';
import ScrollableFeed from "react-scrollable-feed"

function ChatList() {
  const {messages}=useChat()
  

  return (
    
    <div className={styles.chatlist}>
     <ScrollableFeed forceScroll={true}> {
        messages.map((item,key)=>(
          <ChatItem item={item} key={key}/>
        ))
      }
      </ScrollableFeed>
    </div>
  )
}

export default ChatList