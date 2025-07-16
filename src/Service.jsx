import React from "react";
import { Container, Row } from "react-bootstrap";
import { MdLocalShipping } from "react-icons/md";
import Service_props from "./Service_props";
import { IoPerson } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Service = () => {
    return (
        <>
            <div className="service-outer">
                <Container>
                    <Row   className="service-inner">

                        <Service_props icon={<MdLocalShipping className="s-icon" />} name={"free shipping worldwide"} free={"Free shipping in the world"} />
                        <Service_props icon={<IoPerson className="s-icon" />} name={"Special Gift"} free={"Give the perfect gift to your loved ones"} />
                        <Service_props icon={<FaMoneyBillTrendUp className="s-icon" />} name={"Money Back"} free={"Not receiving an item applied to reward"} />

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Service