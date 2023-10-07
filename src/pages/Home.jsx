import {Container, Col, Row } from 'react-bootstrap'
import '../styles/Home.scss'

import mockup from '../assets/images/mockup.png'
import mockup2 from '../assets/images/mockup2.png'

function Home() {
  return (
    <>
    <div className='intro'>
    <Container>
      <Row>
        <Col lg={6} md={6}>
          <div className='intro-content'>
            <h1 className='text'>Navi<span>X</span>plore</h1>
            <h2 className='text-white'>Making commute easy for everyone...</h2>
          </div>
          <div className='d-flex download-options'>
          <div className="align-self-center">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="get-on-playstore"
                width={180}
              />
            </div>
            <div className="align-self-center">
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="get-on-appstore"
                width={150}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={6}>
          <img src={mockup} alt='mockup' height={600}/>
          <img src={mockup2} alt='mockup' height={600}/>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Home