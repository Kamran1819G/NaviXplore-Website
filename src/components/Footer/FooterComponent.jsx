import { Link } from "react-router-dom";
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
                  <Link>Explore Navi Mumbai</Link>
                </li>
                <li>
                  <Link>Navi Mumbai Travel Hacks</Link>
                </li>
                <li>
                  <Link>Live Announcements</Link>
                </li>
                <li>
                  <Link>Commuter News</Link>
                </li>
                <li>
                  <Link>Media Coverage</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About NaviXplore App</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Advertise with us</Link>
                </li>
                <li>
                  <Link>Terms Of Use</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="follow-us">
              <h4 className="text-center">Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <Link>
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="bi bi-youtube"></i>
                  </Link>
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
