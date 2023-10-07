import "./FooterComponent.scss";
import { Col, Container, Row } from "react-bootstrap";

function FooterComponent() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row className="pb-4 pt-4">
            <Col lg={2}>
              <span className="footer-brand">
                Navi<span>X</span>plore
              </span>
            </Col>
            <Col lg={6} className="align-self-center">
              <span className="footer-description">
                Get access to trusted, authentic & real time information about
                Navi Mumbai Metro. Live locations, time tables, passenger
                services, amenities and more at your fingertips.
              </span>
            </Col>
            <Col lg={2} className="align-self-center">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="get-on-playstore"
                width={180}
              />
            </Col>
            <Col lg={2} className="align-self-center">
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="get-on-appstore"
                width={150}
              />
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={3} className="text-center">
              <h4>Company</h4>
              <p>lorem</p>
            </Col>
            <Col lg={3} className="for-xplorers">
              <h4>For Xplorers</h4>
              <ul>
                <li>
                  <a>Explore Navi Mumbai</a>
                </li>
                <li>
                  <a>Navi Mumbai Travel Hacks</a>
                </li>
                <li>
                  <a>Live Announcements</a>
                </li>
                <li>
                  <a>Commuter News</a>
                </li>
                <li>
                  <a>Media Coverage</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About NaviXplore App</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Advertise with us</a>
                </li>
                <li>
                  <a>Terms Of Use</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="follow-us">
              <h4 className="text-center">Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a>
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-4 pb-2">
            <Col lg={12} className="text-center">
              <span className="footer-description">
                © 2023 NaviXplore. All rights reserved.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterComponent;
