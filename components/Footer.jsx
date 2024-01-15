import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from '../node_modules/react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 JSM Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>

    </div>
  )
}

export default Footer