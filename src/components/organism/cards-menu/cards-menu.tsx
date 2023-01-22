import React, { useContext } from "react";
import { RecipesContext } from "../../../recipe-context";
import { MenuCard } from "../../molecules/menu-card/menu-card";
import { menuCardsData } from "../../molecules/menu-card/menuCardsData";
import { RecipeCardItems } from "../../molecules/recipes/recipe-card";
import './cards-menu.styles.scss'

export const CardsMenu = () => {
  const {setCurrent} = useContext(RecipesContext)
  return (
    <div className="cards-menu">
      {menuCardsData.map((items: RecipeCardItems, index: number) => {        
        return (
          <MenuCard title={items.title} onClick={setCurrent} image={items.image}  key={index}/>
        );
      })}
    </div>
  );
};
