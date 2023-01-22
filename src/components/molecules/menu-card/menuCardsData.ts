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
        url:'/',
        onClick :()=>{}
    },
    {
        image: main,
        title: 'Principales',
        url:'/',
        onClick : ()=>{}
    },
    {
        image: cake,
        title: 'Tortas',
        url:'/',
        onClick : ()=>{}
    },
    {
        image: fastFood,
        title: 'Rapida',
        url:'/',
        onClick : ()=>{}
    },
    {
        image: kids,
        title: 'Menú niños',
        url:'/',
        onClick : ()=>{}
    },
    {
        image: soup,
        title: 'Sopas',
        url:'/',
        onClick : ()=>{}
    },
]