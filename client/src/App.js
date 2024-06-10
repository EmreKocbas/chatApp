import {ChatProvider} from './context/chatContext'
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <ChatProvider>
      <Container/>
    </ChatProvider>
  );
}

export default App;
