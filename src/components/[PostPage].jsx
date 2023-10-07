import { PropTypes } from "prop-types";
import { marked } from "marked";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

function PostPage({ data }) {
  useEffect(() => {
    const readmeDiv = document.getElementById("readme");
    readmeDiv.innerHTML = marked(data.content);
  }, [data.content]);

  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">{data.name}</span>
      </div>
      <Container>
        <Row>
          <Col lg={6} className="mt-4 mb-4">
            <img src={data.image_url} alt={data.name} style={{width: "100%", height: "450px", borderRadius: "12px"}}/>
          </Col>
            <Col lg={6} className="mt-4 mb-4">
            <iframe src={data.embed_map_url} style={{width: "100%", height: "450px",  borderRadius: "12px"}} allowfullscreen="" loading="lazy"></iframe>
            </Col>
        </Row>
        <Col lg={12} className="mt-4 mb-4">
            <div id="readme"></div>
        </Col>
      </Container>
    </>
  );
}

PostPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    embed_map_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPage;
