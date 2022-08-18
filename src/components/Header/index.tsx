import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='py-2 container mx-auto md:px-6 bg-gray-100'>
      <Link to="/" className='mr-3'>Accueil</Link>
      <Link to="/survey/1" className='mr-3'>Questionnaire</Link>
      <Link to="/freelances" className='mr-3'>Profils</Link>
    </nav>
  )
}

export default Header