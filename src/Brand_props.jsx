import React from "react";
import { Col } from "react-bootstrap";


const Brand_props = (b) => {
    return (

        <>
            <Col xxl={2}>
                <div className="Banner-img">
                    <a href="#"><img src= {b.img} alt="" /></a>
                </div>
            </Col>

        </>
    )
}

export default Brand_props