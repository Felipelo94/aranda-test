import React from "react";
import "./recipe-card.styles.scss";
import heart from '../../assets/icons/ic-favorite.svg';
import star from '../../assets/icons/ic_star.svg'
import portion from '../../assets/icons/ic_portion.svg'
import time from '../../assets/icons/ic_time.svg'
import chef from '../../assets/icons/ic_chef.svg'

export type RecipeCardTypes = {
  items: any;
};

export const RecipeCard = ({ items }: RecipeCardTypes) => {

  function randomIntFromInterval(min: number, max:number) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 2)
  const rndInt2 = randomIntFromInterval(1, 5)


  return (
    <article className="recipe-card">
      <img
        src={items.image}
        alt="recipe-image-example"
        className="recipe-card__img"
      />
      <div className="recipe-card__container">
      <h2 className="recipe-card__title">{items.title}</h2>
      <div className="recipe-card__servings">
        <img src={portion} alt="card-icon-servings" />
        <h3 className="recipe-card__servings-title">Tamaño de la porción</h3>
        <h3 className="recipe-card__servings-amount">{items.servings} raciones</h3>
      </div>
      <div className="recipe-card__preaparationTime">
        <img src={time} alt="card-icon-preparation-time-icon" />
        <h3 className="recipe-card__preaparationTime-title">Tiempo de preparación</h3>
        <h3 className="recipe-card__preaparationTime-time">{items.readyInMinutes} minutos</h3>
      </div>
      <div className="recipe-card__difficulty">
        <img src={chef} alt="card-icon-difficulty-icon" />
        <h3 className="recipe-card__difficulty-title">Dificultad</h3>
        <h3 className="recipe-card__difficulty-level">{rndInt === 1 ? 'fácil' : 'difícil'}</h3>
      </div>
      <div className="recipe-card__icons">        
        <div className="recipe-card__icons-star">
          <img src={star} alt="rate-icon-star" />
          <p>{rndInt2}</p>
        </div>
        <div>
          <img src={heart} alt="favorite-icon" />
        </div>
      </div>
      </div>
      
    </article>
  );
};
