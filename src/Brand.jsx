import React from "react";
import {  Container, Row } from "react-bootstrap";
import Brand_props from "./Brand_props";



const Brand = () => {
    return (

        <>

            <div className="Brand-outer">
                <Container>
                    <Row>
                         <Brand_props img={"/Images File/Watchimg21.jpg"}/>
                         <Brand_props img={"/Images File/Watchimg22.jpg"}/>
                         <Brand_props img={"/Images File/Watchimg23.jpg"}/>
                         <Brand_props img={"/Images File/Watchimg24.jpg"}/>
                         <Brand_props img={"/Images File/Watchimg22.jpg"}/>
                         <Brand_props img={"/Images File/Watchimg21.jpg"}/> 
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Brand