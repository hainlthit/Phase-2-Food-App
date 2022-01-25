import React from 'react';

function Header() {
    return (
        <header className="block row center">
        <div>
          <a href="#/">
            <h1>Unnamed Japanese Restaurant</h1>
          </a>
        </div>
        <div>
          <a href="#/cart"> Cart </a>
          <a href="#/signin"> SignIn</a>
        </div>
      </header>
    );
  }




export default Header;