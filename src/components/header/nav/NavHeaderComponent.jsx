import React from "react";
import classes from './NavHeaderComponent.module.css';
import { Cart, Globe, Search } from "./navHeader-icons";

export const NavHeaderComponent = () => {
    return (
        <div className={classes.container}>
            <div className={classes.nav}>
                <div className={classes.logo}>
                    CleverShop
                </div>
                <div className={classes.menuNav}>
                    <div>About Us</div>
                    <div>Women</div>
                    <div>Men</div>
                    <div>Beauty</div>
                    <div>Accessories</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div className={classes.profile}>
                    <img src={Search} alt="search" width="18" height="18"/>
                    <img src={Globe} alt="globe" width="18" height="18"/>
                    <div>acc</div>
                    <img src={Cart} alt="globe" width="16" height="18"/>
                </div>
            </div>
        </div>

    )
}
