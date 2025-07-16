import React from "react";
import { Col } from "react-bootstrap";


const New_products_props = (N_products) => {


    return (

        <>
            <Col xxl={3}>
                <div className="products-img">
                    <img src={N_products.img} alt="" />
                </div>
                <div className="products-text">
                    <p>{N_products.name}</p>
                    <span>{N_products.price}</span>

                    <div className="cart-button">
                        <a href="#">{N_products.bay}</a>
                    </div>
                </div>
            </Col>
        </>
    )
}


export default New_products_props