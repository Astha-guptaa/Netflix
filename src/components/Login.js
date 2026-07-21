import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false)

  const handleSignIm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg'
          alt='logo'
        />
      </div>
      <div className='relative flex h-screen items-center justify-center'>
        <form className='w-3/12 p-8 bg-black bg-opacity-80 text-white'>
          <h1 className='font-bold text-xl my-4'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignIn && <input
            className='p-3 my-3 w-full bg-gray-700'
            type='text'
            placeholder='Name'
          />}
          <input
            className='p-3 my-3 w-full bg-gray-700'
            type='text'
            placeholder='Email'
          />
          <input
            className='p-3 my-2 w-full bg-gray-700'
            type='password'
            placeholder='Password'
          />
          <button className='w-full p-3 my-4 bg-red-800 font-bold'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <div className='my-4'>
            <span className=''>
              {!isSignIn ? 'Already a User? ' : 'New to Netflix? '}
            </span>
            <span className='font-bold cursor-pointer' onClick={handleSignIm}>
              {!isSignIn ? 'Sign In now' : 'Sign Up now'}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
