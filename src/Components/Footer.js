import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <div className='footer' >
            <div className='linkContainer'>
            <Link to='/'>Home</Link>
            <Link to='/product'>Shop</Link>
            <Link to='/manCat'>Men</Link>
            <Link to='/womanCat'>Women</Link>
            <Link to='/kidsCat'>kids</Link>
            </div>
        </div>
    );
}
export default Footer;