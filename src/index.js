import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Banner from './Banner';
import Service from './Service';
import New_products from './New_products';
import Offer_banner from './Offer_banner';
import Trending_products from './Trending_products';
import Recent_posts from './Recent_posts';
import Brand from './Brand';
import Newsletter from './Newsletter';
import Footer from './Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        <Header />
        <Banner />
        <Service/>
        <New_products/>
        <Offer_banner/>
        <Trending_products/>
        <Recent_posts/>
        <Brand/>
        <Newsletter/>
        <Footer/>
    </>

);

