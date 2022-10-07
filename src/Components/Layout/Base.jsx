import React from 'react'
import Footer from './Footer'
import Header from './Header';
import ScrollToTop from 'react-scroll-to-top';
import {BiUpArrow} from 'react-icons/bi'

const Base = (props) => {
  return (
    <div className='base'>
    <ScrollToTop className='scroll'/>
    <Header/>
    {props.children}
    <Footer/>
    </div >
  )
}

export default Base