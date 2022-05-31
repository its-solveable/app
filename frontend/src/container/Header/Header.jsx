import React from 'react';
import { motion } from 'framer-motion'

// internal resources

import { images } from '../../constants'
import AppWrap from '../Wrapper/AppWrap'
import{ Navbar } from '../../components/'
// styles 
import './Header.scss'

// components
function Header() {
  return (
  <div className='app__header app__flex'>
      <Navbar />
  </div>
  )
}
export default AppWrap(Header,'home');