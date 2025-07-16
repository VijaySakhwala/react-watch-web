import React from "react";
import {Container, Row } from "react-bootstrap";
import New_products_props from "./New_products_props";


const New_products = () => {
    return (
        <>
            <div className="products outer">
                <Container>
                    <div className="products-heading">
                        <h2> New Products </h2>
                    </div>
                    <Row>
                        <New_products_props img={"/Images File/Watchimg3.png"} name={"Voluptas Assumenda"} price={"$219"} bay={"add to cart"} />
                        <New_products_props img={"/Images File/Watchimg4.png"} name={"Molestiae Consequatur"} price={"$119"} bay={"add to cart"} />
                        <New_products_props img={"/Images File/Watchimg5.png"} name={"Facere possimus"} price={"$139"} bay={"add to cart"} />
                        <New_products_props img={"/Images File/Watchimg7.png"} name={"Voluptas Assumenda"} price={"$229"} bay={"add to cart"} />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default New_products