import React from "react";
import { Container, Row } from "react-bootstrap";
import Trending_products_props from "./Trending_products_props";



const Trending_products = () => {

    return (

            <>
                <div className="Trending-outer">
                    <Container>
                        <div className="Trending-heading">
                            <h2>Trending products</h2>
                        </div>
                        <Row>
                            <Trending_products_props img={"/Images File/Watchimg10.png"} name={"Voluptas Assumenda"} price={"$219"} bay={"add to cart"} />
                            <Trending_products_props img={"/Images File/Watchimg11.png"} name={"Molestiae Consequatur"} price={"$119"} bay={"add to cart"} />
                            <Trending_products_props img={"/Images File/Watchimg12.png"} name={"Facere possimus"} price={"$139"} bay={"add to cart"} />
                            <Trending_products_props img={"/Images File/Watchimg4.png"} name={"Voluptas Assumenda"} price={"$229"} bay={"add to cart"} />
                        </Row>
                    </Container>
                </div>
            </>
    )
}

export default Trending_products