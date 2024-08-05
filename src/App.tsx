import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Chat from './pages/Chat'
import { io } from "socket.io-client";
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const backend_url = "https://system-backend-production-1e10.up.railway.app/api";


export const socket = io(backend_url)

function App() {
  const user = useSelector((state: RootState) => state.User.user);

  useEffect(() => {
    socket.emit('userOnline', user?._id)
  }, [user])


  return (
    <>
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Chat />} path="/chat" />
      <Route element={<Register />} path="/register-account" />
      <Route element={<NotFound />} path="/*" />
    </Routes>
    <p className={` text-sm lg:text-base bottom-2 lg:bottom-5 text-center`}>Created by Rohit with ❤️</p>
    </>
  )
}

export default App
