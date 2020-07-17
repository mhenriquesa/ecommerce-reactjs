import React from 'react';

const MenuItem = ({ title, image, size }) => {
  return (
    <div className={`menu-item ${size}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
