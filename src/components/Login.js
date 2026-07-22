import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateLoginForm } from '../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleSignIm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleLoginSubmitForm = async () => {
    const message = validateLoginForm(
      email.current.value,
      password.current.value
    )
    setErrorMessage(message)

    if (message) return

    if (!isSignIn) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: 'https://avatars.githubusercontent.com/u/65212635?v=4'
        })
        const { uid, email:userEmail, displayName, photoURL } = auth.currentUser
        dispatch(
          addUser({
            uid,
            email: userEmail,
            displayName,
            photoURL,
          })
        )
        console.log('User created and profile updated:', userCredential.user)
      } catch (error) {
        setErrorMessage(error.message)
        console.log('error', error.code, error.message)
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        console.log('User created and profile updated:', userCredential.user)
      } catch (error) {
        setErrorMessage(error.message)
        console.log('error', error.code, error.message)
      }
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg'
          alt='logo'
          className='w-screen'
        />
      </div>
      <div className='relative flex h-screen items-center justify-center'>
        <form
          className='w-4/12 p-8 bg-black bg-opacity-80 text-white'
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className='font-bold text-xl my-4'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className='p-2 my-3 w-full bg-gray-700 rounded'
              type='text'
              placeholder='Name'
            />
          )}
          <input
            ref={email}
            className='p-2 my-3 w-full bg-gray-700 rounded'
            type='text'
            placeholder='Email'
          />
          <input
            ref={password}
            className='p-2 my-2 w-full bg-gray-700 rounded'
            type='password'
            placeholder='Password'
          />
          {errorMessage && (
            <p className='text-xs text-red-600'>{errorMessage}</p>
          )}
          <button
            className='w-full p-3 my-4 bg-red-800 font-bold rounded'
            onClick={handleLoginSubmitForm}
          >
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
