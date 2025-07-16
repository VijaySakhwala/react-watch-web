import React from "react";
import { Container, Row } from "react-bootstrap";
import Recent_posts_props from "./Recent_poster_props";

const Recent_posts = () => {

    return (
        <>
            <div className="recent-outer">
                <Container>
                    <div className="recent-heading">
                        <h2> Recent Posts </h2>
                    </div>
                    <Row className="row-inner">

                        <Recent_posts_props img={"/Images File/Watchimg15.png"} name={"At vero eos et accusamus et iusto odio."} date={" 10 Jun 2025"} name1={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam"} />
                        <Recent_posts_props img={"/Images File/Watchimg14.png"} name={"Nemo enim ipsam voluptatem quia."} date={" 10 Jun 2025"} name1={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam"} />
                        <Recent_posts_props img={"/Images File/Watchimg16.png"} name={"Et harum quidem rerum facilis estet."} date={" 10 Jun 2025"} name1={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam"} />

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Recent_posts
