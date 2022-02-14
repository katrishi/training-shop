import React from "react";
import './styles.css';

export const ClothesComponent = ({products, img, productType}) => {
    return (
        <div className="clothes" data-test-id={`clothes-${productType}`}>
            <div className="clothes-container">
                {
                    products.map((item, index) => (
                        <div className="clothes-items" key={index}>
                            <div>
                                <img src={img[item.img]} alt={item.img} />
                            </div>
                            <div className="clothes-items-text">
                                {item.text}
                            </div>
                            <div className="clothes-items-rating">
                                <div className="clothes-items-price">
                                    $ {item.price}
                                </div>
                                <div><img src={img.rating} alt="rating" /></div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
