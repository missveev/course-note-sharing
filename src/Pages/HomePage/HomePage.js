import React from 'react';
import Navigation from "../../Navigation/Navigation";
import NavCategory from "../../NavCategory/NavCategory";
import CategoryPage from "../../Category/Category";
import FeaturesPage from "../../Features/Feature";
import FooterPage from "../../Footer/Footer";

const HomePage =()=>(
    <div>
        <Navigation/>
        <NavCategory/>
        <CategoryPage/>
        <FeaturesPage/>
        <FooterPage/>
    </div>
);
export default HomePage;