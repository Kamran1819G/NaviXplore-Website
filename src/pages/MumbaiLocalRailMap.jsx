import { Container, Col } from 'react-bootstrap'

function MumbaiLocalMap() {
  return (
    <>
    <div className="page-heading-section">
        <span className="page-heading">Mumbai Local RailMap</span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4">
          <iframe
            title="Mumbai Local RailMap"
            src="https://www.google.com/maps/d/u/0/embed?mid=1jnyRPwZ7cLSHwy-3bRVq1ex3ptnnRms&ehbc=2E312F"
            width="100%"
            height="600"
          ></iframe>
        </Col>
      </Container>
    </>
  )
}

export default MumbaiLocalMap