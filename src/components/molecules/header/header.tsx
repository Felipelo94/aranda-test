import './header.styles.scss';
import ic_home from '../../../assets/icons/ic_home.svg'
import { menuCardsData } from '../menu-card/menuCardsData';

const Header = () => {
  return (
    <nav className='header'>
        <div className='header__title'>
            <h1>Recipe<span className='header__title-secondary'>APP</span></h1>
        </div>
        <div className='header__icon'>            
              <ul className='header__icon-navigation'>
                <li>Home</li>
            {menuCardsData.map((item, index)=>{
              return(
                  <li key={index}>{item.title}</li>
                  )
                })}
                </ul>
            
            <img src={ic_home} alt="home-icon" className='header__icon-icon' />
        </div>
    </nav>
  )
}

export default Header