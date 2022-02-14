import React from "react";
import { ClothesComponent } from "../../components";
import women from '../../data/women.json';
import * as images from '../../components/womenComponents/women-img';


export const WomenPage = () => {
    return (
        <ClothesComponent products={women} img={images} productType="women"/>
    )
}
