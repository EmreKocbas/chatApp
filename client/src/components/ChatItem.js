
import styles from './styles.module.css';

function chatItem({item}) {
  return (
    <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>{item.message}</div>
  )
}

export default chatItem