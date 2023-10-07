import "./PlacesCard.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlacesCard({ data }) {
  return (
    <>
      <Link className="link" to={`/places/${data.name}`}>
        <Card className="mt-4 mb-4">
          <Card.Img variant="top" src={data.image_url} />
          <Card.Body>
            <Card.Title>
              {data.name}
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data.location}</small>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

export default PlacesCard;
