import * as React from "react"
import { Button, Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../../../images/Banner/hero.png';
import './Banner.scss'

// markup
const Banner = () => {
    return (
        <div className="banner_section">
            <Container>
                <Row>
                    <Col className="left_content mb-0 mb-5" lg="7">
                        <h4>JAMSTACK WEBSITES</h4>
                        <h1>People and search engines <p>love fast websites.</p></h1>
                        <p>Get a competitive edge (unfair advantage) over your competitors with fast, SEO friendly performant websites.</p>
                        <Button>View More</Button>
                    </Col>
                    <Col className="img_content" lg="5">
                        <img src={BannerImg} alt="BannerImg" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
