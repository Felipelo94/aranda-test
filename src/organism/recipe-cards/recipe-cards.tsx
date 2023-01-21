import React, { useEffect, useState } from 'react'
import { get } from '../../service/http-service'
import { RecipeType } from './recipe-types'
import axios from 'axios'
import { RecipeCard } from '../../molecules/recipes/recipe-card'
import './recipe-cards.styles.scss'
import useWindowDimensions from '../../utils/useWindowDimensions'




export const RecipeCards = () => {

  const {width} = useWindowDimensions();
    
   const [recipes, setRecipes] = useState<RecipeType[]>([]) 

   useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=4&tags&apiKey=d8e9d29246ff41f3b0636b303fecec1b`)
    .then((res)=>{
      setRecipes(res.data.recipes)      
    })
   
   }, [])
    

  return (
    <div className='recipes'>      
      <h2 className='recipes__title'>Nuevas Recetas</h2>
      <div className='recipes__cards'>
      {recipes.map((items, index)=>{
        return(
         <RecipeCard items={items} key={index}/>
        )
      })}
      </div>
    </div>
    
  )
}
