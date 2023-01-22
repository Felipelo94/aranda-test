import { createContext } from "react";

const RecipesContext = createContext({
  current:'',
  setCurrent: (current: string)=>{}
});

export{RecipesContext}