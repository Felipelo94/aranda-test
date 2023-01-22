import React, { useContext } from 'react'
import { RecipesContext } from '../../../recipe-context';
import './menu-card.styles.scss'


export type MenuCardTypes={
    title:string;
    image:string;
    onClick: (title:string)=>void
    url?:string  
}

export const MenuCard = ({title, image, onClick}: MenuCardTypes) => {

  const {current, setCurrent} = useContext(RecipesContext)
  return (
    <div className='menu-card' onClick = {()=>onClick(title)}>
        <img src={image} alt='recipe-ingredients-filter' className='menu-card__img'/>
        <h2 className='menu-card__title'>{title}</h2>
    </div>
  )
}
