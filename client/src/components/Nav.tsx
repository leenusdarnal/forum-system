import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const signOut = () => {
    localStorage.removeItem('_id')
    navigate('/')
  }
  return (
    <nav className='flex flex-row justify-between bg-navbarPurple text-white py-3 px-5 font-sans '>
      <h2 className='text-4xl'>
        <span className=''>Threadify</span>
      </h2>
      <button
        className='bg-orange-400 p-2 md:px-10 md:py-3 font-serif rounded-xl'
        onClick={signOut}
      >
        Sign Out
      </button>
    </nav>
  )
}

export default Nav
