import React from "react";
import { MenuCard } from "../../molecules/menu-card/menu-card";
import { menuCardsData } from "../../molecules/menu-card/menuCardsData";
import './cards-menu.styles.scss'

export const CardsMenu = () => {
  return (
    <div className="cards-menu">
      {menuCardsData.map((items: any, index: any) => {
        {console.log(items)}
        return (
          <MenuCard title={items.title} url={items.url} image={items.image}  key={index}/>
        );
      })}
    </div>
  );
};
