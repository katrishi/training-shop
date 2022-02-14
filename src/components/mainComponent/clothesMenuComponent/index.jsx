import React from "react";
import '../styles.css';

export const ClothesMenuComponent = ({title}) => {
    return (
        <div className="clothes-menu">
            <h3 className="clothes-menu-title">{title}</h3>
            <div className="clothes-menu-nav">
                <div>NEW ARRIVALS</div>
                <div>SPECIALS</div>
                <div>BESTSELLERS</div>
                <div>MOST VIEWED</div>
                <div>FEATURED PRODUCT</div>
            </div>
        </div>
    )
}
