import React from 'react'
import Input from '../../components/inputs/Input'
import GenderCheckBox from '../../components/genderCheckBox/GenderCheckBox'
import Button from '../../components/Buttons/Button'

const Signup = () => {
  return (
    <div className='w-[500px] flex flex-col items-center justify-center min-w-[290px] gap-2'>
      <h1 className='text-3xl mb-8 font-semibold text-center text-gray-300'>Join <span className='text-blue-500'>ChatApp</span></h1>
      <form action="" className='w-full flex flex-col gap-2'>
        <Input label="Name" placeholder="Enter your full name" type="text" name="fullName" />
        <Input label="Username" placeholder="Enter your username" type="text" name="username" />
        <Input label='Password' placeholder='Enter your password' type='password' name='password' />
        <Input label='Confirm Password' placeholder='Enter your password' type='password' name='confirmPassword' />
        <GenderCheckBox />
        <div className='text-left text-sm'>
          <p>Already have an account? <span className='text-blue-500 underline underline-offset-2'><a href="">Sign In</a></span></p>
        </div>
        <div className='w-full'>
          <Button className='bg-sky-500 rounded-lg w-full p-2 text-gray-300 hover:bg-sky-600' btnName='Join' />
        </div>
      </form>
    </div>
  )
}

export default Signup
