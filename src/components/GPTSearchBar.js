import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.config.language)

  return (
    <div className='flex justify-center'>
      <div className='absolute -z-10'>
        <img src={BACKGROUND_IMAGE} alt='logo' className='w-screen' />
      </div>
      <form className='w-1/2 m-24 bg-black grid grid-cols-12'>
        <input
          type='text'
          className='p-2 m-3 col-span-9 rounded'
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button className='p-2 m-3 col-span-3 bg-red-700 text-white rounded'>
          {language[lang].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar
