import React from 'react';
import FooterList from './FooterList';
import './FooterStyle.css'
import FooterIconList from './FooterIconsList'

const SectionFooter = () => {
    return (
        <div className="footer-container" >
            <FooterList />
            <FooterIconList />
            <hr />
            
        </div>    
    )
}


export default SectionFooter;

