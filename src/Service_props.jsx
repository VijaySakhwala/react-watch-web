import React from "react";
import { Col } from "react-bootstrap";


const Service_props = (s) => {
    return (
        <>

            <Col xxl={4}> 
                <div className="service-icon">
                    <a href="#">{s.icon}</a>
                </div>
                <div className="service-text">
                    <a href="#"><span>{s.name}</span></a>
                    <a href="#"><p>{s.free}</p></a>
                </div>
            </Col>

        </>
    )
}

export default Service_props