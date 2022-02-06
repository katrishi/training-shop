import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import {
    Cart,
    Clock,
    Facebook,
    Globe,
    Instagram,
    LocationMarker,
    Phone,
    Pinterest,
    Search,
    Twitter,
    Account
} from './header-icons';
import menu from "../../data/menu.json";

export const HeaderComponent = () => {
    return (
        <div className="header" data-test-id="header">
            <div className="topBar-container">
                <div className="topBar">
                    <div className="contact">
                        <div><img src={Phone} alt="phone" /></div>
                        <div>+375 29 100 20 30</div>
                        <div><img src={LocationMarker} alt="location" /></div>
                        <div className="location">Belarus, Gomel, Lange 17</div>
                        <div><img src={Clock} alt="clock" /></div>
                        <div>All week 24/7</div>
                    </div>
                    <div className="networks">
                        <img src={Facebook} alt="facebook" width="12.13" height="12.13" />
                        <img src={Twitter} alt="twitter" width="12.9" height="10.5" />
                        <img src={Instagram} alt="instagram" width="10.93" height="10.93" />
                        <img src={Pinterest} alt="pinterest" width="12.25" height="12.25" />
                    </div>
                </div>
            </div>
            <div className="nav">
                <Link
                    to="/"
                    className="header-nav-logo"
                    data-test-id="header-logo-link"
                >
                    CleverShop
                </Link>
                <div className="menu" data-test-id="menu">
                    {
                        menu.map((item) => (
                            <Link
                                to={item.path}
                                key={item.id}
                                className="menu-item"
                                data-test-id="menu"
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="profile">
                    <img src={Search} alt="search" width="18" height="18" />
                    <img src={Globe} alt="globe" width="18" height="18" />
                    <img src={Account} alt="account" width="14" height="18" />
                    <img src={Cart} alt="globe" width="16" height="18" />
                </div>
            </div>
        </div>
    )
}
