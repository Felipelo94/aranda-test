import React, { useEffect, useState } from 'react'
import { get } from '../../service/http-service'
import { RecipeType } from './recipe-types'

export const RecipeCards = () => {
    const  getRecipes = async () => {  
        const {data} = await get('https://api.spoonacular.com/recipes/random?number=4&apiKey=d8e9d29246ff41f3b0636b303fecec1b'?? '')    
        return await data
    }

   const [recipes, setRecipes] = useState<RecipeType[]>([]) 

   useEffect(() => {
    const data = getRecipes()     
    {console.log(data)}
   }, [])
    

  return (
    
    <div>RecipeCards</div>
  )
}
