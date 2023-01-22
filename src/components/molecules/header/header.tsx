import './header.styles.scss';
import ic_home from '../../../assets/icons/ic_home.svg'
import { menuCardsData } from '../menu-card/menuCardsData';
import { useContext } from 'react';
import { RecipesContext } from '../../../recipe-context';

const Header = () => {

  const {current, setCurrent} = useContext(RecipesContext)
  return (
    <nav className='header'>
        <div className='header__title'>
            <h1>Recipe<span className='header__title-secondary'>APP</span></h1>
        </div>
        <div className='header__icon'>            
              <ul className='header__icon-navigation'>
                <li onClick={()=>setCurrent('')}>Home</li>
            {menuCardsData.map((item, index)=>{
              return(
                  <li key={index} onClick = {()=>setCurrent(item.title)}>{item.title}</li>
                  )
                })}
                </ul>
            
            <img src={ic_home} alt="home-icon" className='header__icon-icon' onClick={()=>setCurrent('')} />
        </div>
    </nav>
  )
}

export default Header