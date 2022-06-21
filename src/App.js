import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop=()=>{
  return (
    <div>I am the shop page</div>    
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='signIn' element={<SignIn/>} />
      </Route>

    </Routes>
  )
}

export default App;
