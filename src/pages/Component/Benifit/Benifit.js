import * as React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import JAM_performance from '../../../images/Banner/JAM_performance.png';
import JAM_seo from '../../../images/Banner/JAM_seo.png';
import JAM_safety from '../../../images/Banner/JAM_safety.png';
import JAM_content from '../../../images/Banner/JAM_content.png';
import JAM_uptime from '../../../images/Banner/JAM_uptime.png';
import './Benifit.scss'

// markup
const Benifit = () => {
    return (
        <Container>
            <div className="Benifit_section">
                <Row>
                    <Col xl="4" lg="2">
                        <h3 className="title">Sites with Benefits</h3>
                        <h2>How Jamstack supports your marketing</h2>
                    </Col>
                    <Col xl="4" lg="2">
                        <img src={JAM_performance} alt="JAM_performance" />
                        <h4>Excellent performance</h4>
                        <p>No database means no time-consuming multiple queries. Static sites are faster sites, even up to 10x.</p>
                    </Col>
                    <Col xl="4" lg="2">
                        <img src={JAM_seo} alt="JAM_seo" />
                        <h4>SEO Advantage</h4>
                        <p>Going static also means better ranking possibilities, what equals more traffic and more $$$.</p>
                    </Col>
                    <Col xl="4" lg="2">
                        <img src={JAM_safety} alt="JAM_safety" />
                        <h4>Safety</h4>
                        <p>Static websites with no plugins or databases are like a fortress. Plus, more secure site means fewer security expenses.</p>
                    </Col>
                    <Col xl="4" lg="2">
                        <img src={JAM_content} alt="JAM_content" />
                        <h4>No-sweat content management</h4>
                        <p>Headless CMSes let you build a website that is both easy to use and customize freely.</p>
                    </Col>
                    <Col xl="4" lg="2">
                        <img src={JAM_uptime} alt="JAM_uptime" />
                        <h4>Reliable uptime &amp; lower costs</h4>
                        <p>Traffic bigger than usual? Not an issue here. With Jamstack marketing websites uptime is anytime. And doesn’t cost a fortune.</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Benifit
