import React from "react";
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
          <Row>
            <Col lg={3} className="text-center">
            </Col>
            <Col lg={3} className="text-center">
            </Col>
            <Col lg={3} className="text-center">
            </Col>
            <Col lg={3} className="text-center">
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterComponent;
