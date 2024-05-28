import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>APNASTORE</h2>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;