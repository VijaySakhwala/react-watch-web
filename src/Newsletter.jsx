import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Newsletter = () => {
    return (

        <>
            <div className="newsletter-outer">
                <Container>

                    <Row>
                        <Col xxl={6}>
                            <div className="newsletter-text">
                                <h2> Newsletter </h2>
                                <span>Sign Up For The Latest Deals.</span>
                            </div>
                        </Col>
                        <Col xxl={6}>
                            <div className="newsletter-email">
                              <form>
                                <input type="email" name="email" required placeholder="Enter your email address"/>
                                <button type="button">Subscribe</button>
                              </form>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>

        </>
    )
}

export default Newsletter