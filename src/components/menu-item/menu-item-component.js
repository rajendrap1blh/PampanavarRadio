import React from 'react';

import './menu-tem-style.scss';
const MenuItem = ({name, id, imageUrl}) => (
    <div className = "menu-item">
        <div className="background-image" style ={{
backgroundImage:`url(${imageUrl})`
    }} >

        </div>
        <div className="content">
            <h1 className="title">{name}</h1>
            <span>Shop Now</span>
        </div>
    </div>
)

export default MenuItem;