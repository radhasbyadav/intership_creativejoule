import React from 'react';

import './Header.css'
const Header = ()=> {
    return(
        
        <section className="Header">
            <form id="div">
            <section className="Header-top">
                <section className="Header-top-logo" id="logo">
                NATURE
                <p>Setting Sun, starry night, silvery light of the Moon, snow-covered mountains, deep and dark forests, scent and fragrance of flowers are some of the beauties of Nature. The chirping of birds in trees has a music of its own. In Spring, Nature is at her best. Blooming flowers of different hues fill the air with fragrance.</p>
                </section> 
                
                <span id="nav">
                <span id="home">Home</span><span id="cn">contact</span><span id="ab">about</span><span id="si">signup</span>
                </span>
            </section>
            
            </form>
          
            
        </section>
        
    );
}

export default Header;