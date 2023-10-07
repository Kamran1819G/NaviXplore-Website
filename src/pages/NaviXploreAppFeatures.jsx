import { Container, Col, Row } from "react-bootstrap";

function NaviXploreAppFeatures() {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">
          About NaviXplore - The Local Guide for Navi Mumbai
        </span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4 page-description">
          <p>
            NaviXplore is the all-in-one guide app from Navi Mumbai Metro which
            consists of information related to Navi Mumbai Metro timetable, Navi
            Mumbai Metro fare indicator, Express trains (Ticket & PNR status),
            Live Announcements from Metro, Metro route map & services like the
            NMMT timetable & routes emergency numbers.
          </p>
        </Col>
        <Row className="mt-4 mb-4">
          <Col lg={6}></Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
    </>
  );
}

export default NaviXploreAppFeatures;
