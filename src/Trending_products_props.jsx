import React from "react";
import { Col } from "react-bootstrap";



const Trending_products_props =(T_products) =>
{
    return(

        <>
       
        <Col xxl={3}>
                <div className="products-img">
                    <img src={T_products.img} alt="" />
                </div>
                <div className="products-text">
                    <p>{T_products.name}</p>
                    <span>{T_products.price}</span>

                    <div className="cart-button">
                        <a href="#">{T_products.bay}</a>
                    </div>
                </div>
            </Col>
    
        
        </>
    )
}

export default Trending_products_props