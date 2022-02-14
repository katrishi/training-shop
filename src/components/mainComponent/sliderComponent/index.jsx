import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';
import {
    btnAccessories,
    btnMen,
    btnWomen,
    titleSlider,
    arrowLeft,
    arrowRight,
} from './slider-img';

export const SliderComponent = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slider-main">
                    <div className="arrow">
                        <img src={arrowLeft} alt="left" />
                    </div>

                    <Link to="/">
                        <img src={titleSlider} alt="title slider" />
                    </Link>

                    <div className="arrow">
                        <img src={arrowRight} alt="right" />
                    </div>
                </div>

                <div className="slider-categories">
                    <div style={{display: "flex"}}>
                        <div className="slider-women">
                            <Link to="/women" className="slider-btn">
                                <img src={btnWomen} alt="women" />
                            </Link>
                        </div>

                        <div className="slider-men">
                            <Link to="/men" className="slider-btn">
                                <img src={btnMen} alt="men" />
                            </Link>
                        </div>
                    </div>

                    <div className="slider-accessories">
                        <Link to="/accessories" className="slider-btn">
                            <img src={btnAccessories} alt="accessories" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
