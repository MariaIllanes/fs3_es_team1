import React from 'react'
import './MainNavbarStyle.css'
import PancakeLogo from '../sharedComponents/PancakeLogo'
import MenuList from './MenuList'
import MenuIconList from './MenuIconList'


const MainNav = () => {
    return (
        <section className='main-navbar'>
            <PancakeLogo/>
            <MenuList/>
            <MenuIconList />
        </section>  
    
    )
}


export default MainNav;
