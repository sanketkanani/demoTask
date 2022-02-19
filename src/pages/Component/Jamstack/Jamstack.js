import * as React from "react"
import { Button, Col, Container, Row } from 'react-bootstrap';
import WhatJam from '../../../images/Banner/What_is_JAM.png';
import './Jamstack.scss'

// markup
const Jamstack = () => {
    return (
        <Container>
            <div className="Jamstack_section">
                <Row>
                    <Col lg="6">
                        <h2>What is Jamstack</h2>
                        <p>Jamstack approach enables you to run a fully dynamic site while the actual assets are pre-rendered static files deployed on CDN. For you, it means faster, more secure, more reliable websites with better SEO ranking capabilities and happier users overall.</p>
                        <p>We build websites using battle-tested SSGs like Gatsby JS, Next JS, Hugo, and headless CMSs like Storyblok, Contentful, Sanity, on platforms such as Vercel and Netlify.</p>
                    </Col>
                    <Col lg="6" className="text-center">
                        <img src={WhatJam} alt="WhatJam" />
                    </Col>
                    <Col className="text-center mt-3">
                        <Button>Read More</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Jamstack
