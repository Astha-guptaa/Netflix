import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { NETFLIX_LOGO, USER_ICON } from '../utils/constants'
import { toggleGPTSearchView } from '../utils/GPTSlice'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      navigate('/error')
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        )
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  const handleGPTSearchView = () => {
    dispatch(toggleGPTSearchView())
  }

  return (
    <div className='absolute p-8 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img src={NETFLIX_LOGO} alt='logo' className='w-36' />
      </div>
      {user && (
        <div className='flex'>
          <button
            className='px-4 py-2 mx-4 rounded bg-purple-900 text-white'
            onClick={handleGPTSearchView}
          >
            GPT Search ✨
          </button>
          <img
            src={user.photoURL ? user.photoURL : USER_ICON}
            alt='userIcon'
            className='rounded w-10'
            onClick={handleSignOut}
          />
        </div>
      )}
    </div>
  )
}

export default Header
