import { useContext, useEffect, useState } from 'react'
import { RecipeType } from './recipe-types'
import axios from 'axios'
import { RecipeCard } from '../../molecules/recipes/recipe-card'
import './recipe-cards.styles.scss'
import { RecipesContext } from '../../../recipe-context'

export const RecipeCards = () => { 

  const {current} = useContext(RecipesContext)
    
   const [recipes, setRecipes] = useState<RecipeType[]>([]) 

   useEffect(() => {
    axios.get(` https://api.spoonacular.com/recipes/random?number=4&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`)
    .then((res)=>{
      setRecipes(res.data.recipes)      
    })
   }, [])
    

  return (
    <div className='recipes'>      
      <h2 className='recipes__title'>{current === ''? 'Nuevas Recetas': `Recetas ${current}`}</h2>
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
