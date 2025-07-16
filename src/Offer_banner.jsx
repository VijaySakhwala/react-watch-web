import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Offer_banner = () => {
    return (

        <>
            <div className="offer-outer">
                <Container>
                    <Row>
                        <Col xxl={6}>
                            <div className="offer-img">
                                 <a href="#"><img src="/Images File/Watchimg8.png" alt="" /></a>
                           </div>

                        </Col>
                        <Col xxl={6}>
                            <div className="offer-img">
                                <a href="#"><img src="/Images File/Watchimg9.png" alt="" /></a>
                           </div>
                        </Col>

                    </Row>

                </Container>
            </div>

        </>
    )
}

export default Offer_banner