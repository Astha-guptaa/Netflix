import React, {useEffect} from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSignOut = async () => {
    try {
    } catch (error) {
      navigate('/error')
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, [])

  return (
    <div className='absolute p-6 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img
          src='https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg'
          alt='logo'
          className='w-36'
        />
      </div>
      {user && (
        <div>
          <img
            src={
              user.photoURL
                ? user.photoURL
                : 'https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABa3dRG2rbN8zB-VMREX8jHBNAp-LORv4rD1qdhSqoNmAbuAKWkaydWTPeYz97fxbFhc8gs3w9eDeMQtt8qnOpmKT4tWPK0M.png?r=1d4'
            }
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
