import '../styles/ExploreNaviMumbai.scss';
import { Container, Col, Row} from "react-bootstrap";
import { useState, useEffect } from "react";

import FamousPlacesJSON from "../json/FamousPlaces.json";
import TouristDestinationsJSON from "../json/TouristDestinations.json";
import PlacesCard from "../components/Cards/PlacesCard";

function ExploreNaviMumbai() {
  const [FamousPlaces, setFamousPlaces] = useState([]);
  const [TouristDestinations, setTouristDestinations] = useState([]);

  useEffect(() => {
    setFamousPlaces(FamousPlacesJSON);
  }, []);

  useEffect(() => {
    setTouristDestinations(TouristDestinationsJSON);
  }, []);

  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">Explore Navi Mumbai</span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4">
          <h3 className="section-heading mt-5 mb-4">Famous Places</h3>
          <Row>
            {FamousPlaces.map((item) => (
              <Col key={item}>
                <PlacesCard key={item.id} data={item} />
              </Col>
            ))}
          </Row>
        </Col>
        <hr />
        <Col lg={12} className="mt-4 mb-4">
          <h3 className="section-heading mt-5 mb-4">Tourist Destinations</h3>
          <Row>
            {TouristDestinations.map((item) => (
              <Col key={item}>
                <PlacesCard key={item.id} data={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default ExploreNaviMumbai;
