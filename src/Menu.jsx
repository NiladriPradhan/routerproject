import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className='menu_style'>
                <NavLink className="clr" exact activeClassName='active_class' to='/'>About Us</NavLink>
                <NavLink className="clr" exact activeClassName='active_class' to="/contact"> Contact Us</NavLink>
                <NavLink className="clr" exact activeClassName='active_class' to="/service"> Service</NavLink>
                <NavLink className="clr" exact activeClassName='active_class' to="/search"> Search</NavLink>

                {/* <NavLink className="clr" exact activeClassName='active_class' to="/user"> user</NavLink> */}
                <NavLink className="clr" exact activeClassName='active_class' to="/user/thapa/technical"> user</NavLink>
            </div>
            
            {/* <a href="/">AboutUS </a>
            <a href="/contact">ContactUS </a> */}
        </>
    );
}
export default Menu;