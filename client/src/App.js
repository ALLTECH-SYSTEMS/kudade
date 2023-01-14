import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import OrderItems from './components/OrderItems';
import { useState } from 'react'
import SingleOrderItem from './components/SingleOrderItem';
import EditOrderItem from './components/EditOrderItem';


function App() {
  const [user, setUser] = useState(null);

  // const [click, setClick] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginForm setUser={setUser} />}></Route>
          <Route path='order-items' element={<OrderItems user={user} />}></Route>
          <Route path='order-items/:id' element={<SingleOrderItem user={user} />}></Route>
          <Route path='order-items/edit/:id' element={<EditOrderItem user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
