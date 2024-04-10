import React, { useState } from 'react'
import Input from "../../components/inputs/Input"
import Button from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='w-[500px] flex flex-col items-center justify-center min-w-[290px] gap-2'>
      <h1 className='text-3xl mb-8 font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>ChatApp</span></h1>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
        <Input label="Username" placeholder="Enter your username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input label='Password' placeholder='Enter your password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='text-right text-sm'>
          <p>Don't have an account? <span className='text-blue-500 underline underline-offset-2'><Link to="/signup">Sign Up</Link></span></p>
        </div>
        <div className='w-full'>
          <Button className='bg-sky-500 rounded-lg w-full p-2 hover:bg-sky-600 text-gray-300' disabled={loading} btnName={loading ? <span className='loading loading-spinner'></span> : "Login"} />
        </div>
      </form>
    </div>
  )
}

export default Login
