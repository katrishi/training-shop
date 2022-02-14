import React from "react";
import {
    ClothesBtnComponent,
    ClothesComponent,
    ClothesMenuComponent,
    InfoComponent,
    SliderComponent
} from "../../components";
import women from '../../data/women.json';
import * as imagesWomen from '../../components/womenComponents/women-img';

export const MainPage = () => {
    return (
        <div>
            <SliderComponent />
            <InfoComponent />
            <ClothesMenuComponent title="women's"/>
            <ClothesComponent
                products={women}
                img={imagesWomen}
                productType="women"
            />
            <ClothesBtnComponent />
            <ClothesMenuComponent title="men's"/>
            <ClothesComponent
                products={women}
                img={imagesWomen}
                productType="women"
            />
            <ClothesBtnComponent />
        </div>
    )
}
