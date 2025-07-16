import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu"
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Header = () => {
    return (

        <>
            <div className="header">
                <div className="header-outer">
                    <Container>
                        <Row>
                            <Col xxl={4}>

                                <Menu />
                            </Col>
                            <Col xxl={8}>
                                <div className="header-icon">
                                    <a href="#"><FaSearch className="serch" /></a>
                                    <a href="#"> <IoPersonSharp className="account" />  </a>
                                    <a href="#"><FaShoppingCart className="cart" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="navbar-outer">
                    <Container>
                        <Row>
                            <Col xxl={4}>
                                <div className="logo">
                                    <img src="/Images File/Watchimg1.png" alt="" />
                                </div>
                            </Col>
                            <Col xxl={8}>
                                <ul className="menu">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="#"><span>men</span></a>
                                            </li>
                                            <li><a href="#"><span>women</span></a>
                                            </li>
                                            <li><a href="#"><span>children</span></a>
                                            </li>
                                        </ul>
                                    </li><FaAngleDown className="down" />
                                    <li><a href="#">premium watches</a>
                                        <ul className="sub-menu1">
                                            <li><a href="#"><span>titan</span></a>
                                            </li>
                                            <li><a href="#"><span>hublot</span></a>
                                            </li>
                                            <li><a href="#"><span>timex</span></a>
                                            </li>
                                            <li><a href="#"><span>Rolex</span></a>
                                            </li>
                                        </ul>

                                    </li><FaAngleDown className="down" />
                                    <li><a href="#">smart watches</a>
                                        <ul className="sub-menu2">
                                            <li><a href="#"><span>boat</span></a>
                                            </li>
                                            <li><a href="#"><span>noise</span></a>
                                            </li>
                                            <li><a href="#"><span>Fossil</span></a>
                                            </li>
                                            <li><a href="#"><span>fasttrack</span></a>
                                            </li>
                                        </ul>

                                    </li><FaAngleDown className="down" />
                                    <li><a href="#">Contect us</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>

    )
}

export default Header