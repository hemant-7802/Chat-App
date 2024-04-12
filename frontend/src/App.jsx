import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { Navigate, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

const App = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="mainContainer mx-auto h-screen flex justify-center items-center p-4 bg-red-600">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App