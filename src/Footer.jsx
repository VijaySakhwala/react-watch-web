import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="first-outer">
                    <Container>
                        <Row>
                            <Col
                                xxl={3}>
                                <div className="footer-logo">
                                    <a href="#"><img src="/Images File/Watchimg1.png" alt="" /></a>
                                    <div className="footer-text">
                                        <p>
                                            Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum haseen passage you need.
                                        </p>
                                    </div>

                                </div>

                            </Col>

                            <Col xxl={3}>
                                <ul className="footer-menu">
                                    <div className="menu-hading">
                                        <h3>My Account</h3>
                                    </div>
                                    <li><a href="#"><FaAngleRight className="right-icon" />My Account</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" /> Login</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" /> Shopping Cart</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" /> My Wishlist</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" /> Track Order</a></li>
                                </ul>

                            </Col>
                            <Col xxl={3}>
                                <ul className="footer-menu">
                                    <div className="menu-hading">
                                        <h3>Information </h3>
                                    </div>
                                    <li><a href="#"><FaAngleRight className="right-icon" />Privacy and Cookie Policy</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Search Terms</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Advanced Search</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Contact Us</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" /> Orders and Returns</a></li>
                                </ul>
                            </Col>
                            <Col xxl={3}>
                                <ul className="footer-menu">
                                    <div className="menu-hading">
                                        <h3>Products</h3>
                                    </div>
                                    <li><a href="#"><FaAngleRight className="right-icon" />Products </a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Top Rated</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Best Sales</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />New Products</a></li><br />
                                    <li><a href="#"> <FaAngleRight className="right-icon" />Legal Terms</a></li>
                                </ul>
                            </Col>

                        </Row>
                    </Container>

                </div>


                <div className="secound-outer">
                    <Container>
                        <Row>

                            <Col xxl={6}>
                                <div class="secound-copyright">
                                    <p>

                                        Copyright © 2025 Cloxiz. All rights reserved.
                                    </p>
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <div className="secound-payment">
                                    <ul>
                                        <li><a href="#"><img src="Images File/Watchimg17.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="Images File/Watchimg18.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="Images File/Watchimg19.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="Images File/Watchimg20.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                            </Col>


                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )




}

export default Footer