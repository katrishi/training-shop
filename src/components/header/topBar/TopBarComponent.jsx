import React from "react";
import classes from './TopBarComponent.module.css';
import { Clock, Facebook, Instagram, LocationMarker, Phone, Pinterest, Twitter } from './topBar-icons';

export const TopBarComponent = () => {
    return (
        <div className={classes.container}>
            <div className={classes.topBar}>
                <div className={classes.contact}>
                    <div><img src={Phone} alt="phone" /></div>
                    <div>+375 29 100 20 30</div>
                    <div><img src={LocationMarker} alt="location" /></div>
                    <div className={classes.location}>Belarus, Gomel, Lange 17</div>
                    <div><img src={Clock} alt="clock" /></div>
                    <div>All week 24/7</div>
                </div>
                <div className={classes.networks}>
                    <img src={Facebook} alt="facebook" width="12.13" height="12.13"/>
                    <img src={Twitter} alt="twitter" width="12.9" height="10.5"/>
                    <img src={Instagram} alt="instagram" width="10.93" height="10.93"/>
                    <img src={Pinterest} alt="pinterest" width="12.25" height="12.25"/>
                </div>
            </div>
        </div>
    )
}
