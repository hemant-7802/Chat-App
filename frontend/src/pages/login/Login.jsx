import React from 'react'
import Input from "../../components/inputs/Input"
import Button from '../../components/Buttons/Button'

const Login = () => {
  return (
    <div className='w-[500px] flex flex-col items-center justify-center min-w-[290px] gap-2'>
      <h1 className='text-3xl mb-8 font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>ChatApp</span></h1>
      <form action="" className='w-full flex flex-col gap-4'>
        <Input label="Username" placeholder="Enter your username" type="text" name="username" />
        <Input label='Password' placeholder='Enter your password' type='password' name='password' />
        <div className='text-right text-sm'>
          <p>Don't have an account? <span className='text-blue-500 underline underline-offset-2'><a href="">Sign Up</a></span></p>
        </div>
        <div className='w-full'>
          {/* <button >Sign In</button> */}
          <Button className='bg-sky-500 rounded-lg w-full p-2 hover:bg-sky-600 text-gray-300' btnName='Login'/>
        </div>
      </form>
    </div>
  )
}

export default Login
