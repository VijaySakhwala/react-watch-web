import React from "react";
import { Col } from "react-bootstrap";



const Recent_posts_props = (R) => {
    return (

        <>
            <Col xxl={4}>
                <div className="recent-img">
                    <img src= {R.img} alt="" />
                    <div className="recent-text">
                        <a href="#"><span>{R.name}</span></a>
                        <p>
                            {R.date}
                        </p>
                        <div>
                            {R.name1}
                        </div>
                    </div>
                </div>

            </Col>
        </>
    )
}

export default Recent_posts_props