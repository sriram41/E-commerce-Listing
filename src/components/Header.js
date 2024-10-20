


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm, cartCount }) => {
  const [isToolsOpen, setToolsOpen] = useState(false);

  const toggleToolsMenu = () => {
    setToolsOpen(!isToolsOpen);
  };

  return (
    <header>
      <div className="para-1">
        <div className='width-para'></div>
        <div className='width-para'><p>Free Shipping on orders above 999/-</p></div>
        <div className='width-para'><p>Call us on: +91 98768 05120</p></div>
      </div>
      <div className="header">
        <div className="h-side-left">
          <img src="/assets/logo.png" alt="logo" />
          <h3>Chaperone</h3>
        </div>
        <div className="second-block">
          <nav>
            <ul className="menu">
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/" activeClassName="active">Plants & Pots</NavLink></li>
              <li className="sub-menuli">
                <NavLink to="/" activeClassName="active">Tools</NavLink>
                <div onClick={toggleToolsMenu} className="dropdown">
                  <span><img src='/assets/sub.png' alt='sub-menu' /></span>
                  {isToolsOpen && (
                    <ul className="submenu">
                      <li><NavLink to="/tools/option1" activeClassName="active">Option 1</NavLink></li>
                      <li><NavLink to="/tools/option2" activeClassName="active">Option 2</NavLink></li>
                      <li><NavLink to="/tools/option3" activeClassName="active">Option 3</NavLink></li>
                    </ul>
                  )}
                </div>
              </li>
              <li><NavLink to="/" activeClassName="active">Our Services</NavLink></li>
              <li><NavLink to="/" activeClassName="active">Blog</NavLink></li>
              <li><NavLink to="/" activeClassName="active">Our Story</NavLink></li>
              <li><NavLink to="/" activeClassName="active">FAQs</NavLink></li>
            </ul>
          </nav>
          <div className="input-search">
            <img className="search-icon1" src="/assets/search-icon.png" alt="search-icon" />
            <input
              type="text"
              placeholder="Search Plant"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img className="leaf" src="/assets/leaf.png" alt="leaf" />
          </div>
        </div>
        <div className="icons">
          <div className="pro-1">
            <i className="profile-icon">
              <img className="search-icon1" src="/assets/person.jpg" alt="profile" />
            </i>
            <p>My Profile</p>
          </div>
          <div className="cart-1-1">
            <i className="cart-icon1">
              <img className="cart-icon" src="/assets/cart.png" alt="cart" />
              <p>{cartCount}</p>
            </i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

