import { Container, Col } from "react-bootstrap";

function NaviMumbaiMetroMap() {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">Navi Mumbai Metro Map</span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4">
          <iframe
            title="Navi Mumbai Metro Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ID2BEAYf5WROOG7Z-4VG8EVF_vgulyQ&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
          ></iframe>
        </Col>
      </Container>
    </>
  );
}

export default NaviMumbaiMetroMap;
