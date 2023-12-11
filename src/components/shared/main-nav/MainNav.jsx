import React from 'react'
import FooterList from './FooterList'
import './MainNavbarStyle.css'
import FooterIconList from './FooterIconsList'
import SecondaryFooter from './SecondaryFooter.jsx'


const SectionFooter = () => {
    return (
        <div className='main-footer'>
            <div>
                <FooterList className='footer-links-container' />
                <FooterIconList />
                <hr /> 
            </div>
                <SecondaryFooter />
        </div>  
    
    )
}


export default SectionFooter;
