import { Container, Col, Row } from "react-bootstrap";

function AdvertiseWithUs() {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">Advertise With Us</span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4">
          <p className="text">
            NaviXplore offers advertising solutions that reach highly engaged
            audiences across India to help meet your marketing objectives.
          </p>
        </Col>
        <Row className="d-flex">
          <Col lg={6} className="mt-2 mb-4">
            <h3>App Ad Inventories</h3>
            <ul>
              <li>Title Credits</li>
              <li>Native Ads</li>
              <li>Interstitial Ads</li>
              <li>Footer Ads</li>
              <li>Live Tracking Card</li>
            </ul>
          </Col>
          <Col lg={6} className="mt-2 mb-4">
            <h3>Agency Business</h3>
            <p className="text">
            Agencies interested in running campaigns across our entire portfolio
            or looking for a strategic collaboration, please contact us. Our
            dedicated team will work with you to find the right me.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdvertiseWithUs;
