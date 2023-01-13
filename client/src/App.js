import './App.css';
import LoginForm from './components/LoginForm';
import OrderItems from './components/OrderItems';
import { useRef, useState } from 'react'

function App() {
  const username = useRef();
  const password = useRef();

  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <OrderItems username={username} password={password} click={click} setClick={setClick}/>
      <LoginForm username={username} password={password} setClick={setClick}/>
    </div>
  );
}

export default App;
