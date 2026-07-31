import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { NETFLIX_LOGO, USER_ICON } from '../utils/constants'
import { toggleGPTSearchView } from '../utils/GPTSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
  const selectedLanguage = useSelector((store) => store.config.language)

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute p-8 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img src={NETFLIX_LOGO} alt='logo' className='w-36' />
      </div>
      {user && (
        <div className='flex'>
          {showGPTSearch && (
            <select
              className='p-2 bg-black text-white rounded'
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.value}
                </option>
              ))}
            </select>
          )}
          <button
            className='px-4 py-2 mx-4 rounded bg-purple-900 text-white'
            onClick={handleGPTSearchView}
          >
            {showGPTSearch ? 'Home' : 'GPT Search ✨'}
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
