import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlacesCard({ data }) {
  return (
    <>
      <Link
        to={`/places/${data.name}`}
        style={{ width: "18rem", textDecoration: "none" }}
      >
        <Card className="mt-4 mb-4" style={{ width: "18rem", border: "soild 3px", borderColor: "rgb(225,128,0)" }}>
          <Card.Img
            variant="top"
            src={data.image_url}
            style={{ height: "14rem", borderRadius: "12px", padding: "20px" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 128, 0)",
              }}
            >
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
