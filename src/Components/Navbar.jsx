import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './utils/global.context'


const Navbar = () => {
  const {theme, toggleTheme, themeName} = useTheme()

  return (
    <nav className={theme.nav}>
      <p className='titulo'><span>D</span>H Odonto</p>
      <div class= 'items-nav'>
      <Link to={'/'}><h4 className={theme.nav}>Inicio</h4></Link>
      <Link to={'/contacto'}><h4 className={theme.nav}>Contacto</h4></Link>
      <Link to={'/favs'}><h4 className={theme.nav}>Favoritos</h4></Link>
      <button onClick={toggleTheme}>{themeName === 'light' ? <img src= '../../images/moon.svg' alt='dark'/> : <img src= '../../images/sun.png' alt='ligth'/>}</button>
      </div>
    </nav>
  )
}

export default Navbar