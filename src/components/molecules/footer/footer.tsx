import React from 'react'
import './footer.styles.scss'
import products from '../../../assets/footer.png'

export const Footer = () => {
  return (
    <div className='footer'> 
        <h2 className='footer__title'>Con el Patrocinio de</h2>
        <img src={products} alt="pratrocinadores-image" className='footer__img'/>
    </div>
  )
}
