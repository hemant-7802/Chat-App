import React, { useState } from 'react'
import Input from '../../components/inputs/Input'
import GenderCheckBox from '../../components/genderCheckBox/GenderCheckBox'
import Button from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()
  
  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className='w-[500px] flex flex-col items-center justify-center min-w-[290px] gap-2'>
      <h1 className='text-3xl mb-8 font-semibold text-center text-gray-300'>Join <span className='text-blue-500'>ChatApp</span></h1>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
        <Input label="Name" placeholder="Enter your full name" type="text" name="fullName" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
        <Input label="Username" placeholder="Enter your username" type="text" name="username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
        <Input label='Password' placeholder='Enter your password' type='password' name='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
        <Input label='Confirm Password' placeholder='Enter your password' type='password' name='confirmPassword' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
        <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
        <div className='text-left text-sm'>
          <p>Already have an account? <span className='text-blue-500 underline underline-offset-2'><Link to="/login">Sign In</Link></span></p>
        </div>
        <div className='w-full'>
          <Button type='submit' className='bg-sky-500 rounded-lg w-full p-2 text-gray-300 hover:bg-sky-600' disabled={loading} btnName={loading ? <span className='loading loading-spinner'></span> : "Sign Up"}/>
        </div>
      </form>
    </div>
  )
}

export default Signup
