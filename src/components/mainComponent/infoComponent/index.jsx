import React from "react";
import { Return, Support, Track } from "./info-icons";
import '../styles.css';

export const InfoComponent = () => {
    return (
        <div className="info-container">
            <div className="info-items">
                <div>
                    <img src={Track} alt="track" />
                </div>
                <div>
                    <p className="info-title">FREE SHIPPING</p>
                    <p className="info-text">On all UA order or order above $100</p>
                </div>
            </div>
            <div className="info-items">
                <div><img src={Return} alt="return" /></div>
                <div>
                    <p className="info-title">30 DAYS RETURN</p>
                    <p className="info-text">Simply return it within 30 days for an exchange</p>
                </div>
            </div>
            <div className="info-items">
                <div><img src={Support} alt="support" /></div>
                <div>
                    <p className="info-title">SUPPORT 24/7</p>
                    <p className="info-text">Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
        </div>
    )
}
