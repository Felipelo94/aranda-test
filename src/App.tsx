import Header from "./molecules/header/header"
import './app.scss'
import Banner from "./molecules/banner/banner"
import { CardsMenu } from "./organism/cards-menu/cards-menu"
import { RecipeCard } from "./molecules/recipes/recipe-card"
import { DataCard } from "./molecules/recipes/Data"
import { Footer } from "./molecules/footer/footer"
import { RecipeCards } from "./organism/recipe-cards/recipe-cards"

function App() {

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CardsMenu/>      
      <RecipeCards/>    
      <Footer/> 
    </div>
  )
}

export default App
