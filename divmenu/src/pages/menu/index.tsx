import React from 'react';
import './index.css'; // 样式文件

const XMenu = () => {
  const handleMenuClick = (menuName) => {
    console.log('Clicked Menu:', menuName);
  };

  return (
    <div className="menu-container">
      <div 
        className="menu-item add"
        onClick={() => handleMenuClick('Addafter')}
      >
        Add after
      </div>
      <div 
        className="menu-item add"
        onClick={() => handleMenuClick('Addchild')}
      >
        Add child
      </div>

      <div 
        className="menu-item remove"
        onClick={() => handleMenuClick('Remove')}
      >
        Remove
      </div>
      <div 
        className="menu-item modify"
        onClick={() => handleMenuClick('Modify')}
      >
        Modify
      </div>
    </div>
  );
};

export default XMenu;
