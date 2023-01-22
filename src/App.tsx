import { useContext, useState } from "react";
import "./app.scss";
import Banner from "./components/molecules/banner/banner";
import { Footer } from "./components/molecules/footer/footer";
import Header from "./components/molecules/header/header";
import { CardsMenu } from "./components/organism/cards-menu/cards-menu";
import { RecipeCards } from "./components/organism/recipe-cards/recipe-cards";
import { RecipesContext } from "./recipe-context";

function App() {
  const [current, setCurrent] = useState("");

  return (
    <RecipesContext.Provider value={{ current, setCurrent }}>
      <div className="App">
        <Header />
        <Banner />
        <CardsMenu />
        <RecipeCards />
        <Footer />
      </div>
    </RecipesContext.Provider>
  );
}

export default App;
