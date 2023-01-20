import React from 'react'
import './menu-card.styles.scss'


export type MenuCardTypes={
    title:string;
    image:string;
    url?:string
}

export const MenuCard = ({title, image, url}: MenuCardTypes) => {
  return (
    <a className='menu-card' href={url}>
        <img src={image} alt='recipe-ingredients-filter' className='menu-card__img'/>
        <h2 className='menu-card__title'>{title}</h2>
    </a>
  )
}
