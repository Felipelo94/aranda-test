import { MenuCardTypes } from "./menu-card";
import vegetarian from '../../../assets/icons/ic_vegetarian.svg'
import main from '../../../assets/icons/ic_main.svg'
import cake from '../../../assets/icons/ic_cake.svg'
import fastFood from '../../../assets/icons/ic_fast-food.svg'
import kids from '../../../assets/icons/ic_kids.svg'
import soup from '../../../assets/icons/ic_soup.svg'





export const menuCardsData : MenuCardTypes[] =[
    {
        image: vegetarian,
        title: 'Vegetarianos',
        url:'/'
    },
    {
        image: main,
        title: 'Principales',
        url:'/'
    },
    {
        image: cake,
        title: 'Tortas',
        url:'/'
    },
    {
        image: fastFood,
        title: 'Rapida',
        url:'/'
    },
    {
        image: kids,
        title: 'Menú niños',
        url:'/'
    },
    {
        image: soup,
        title: 'Sopas',
        url:'/'
    },
]