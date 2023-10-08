import "./PostPage.scss";
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
      <Container className="postpage">
        <Row className="justify-content-center">
          <Col lg={12} className="mt-4">
            <img src={data.image_url} alt={data.name} />
          </Col>
          <Col lg={12} className="mt-4 mb-4">
            <div id="readme"></div>
          </Col>
        </Row>
        <Col lg={6} className="mt-4">
          <iframe
            title={data.name}
            src={data.embed_map_url}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Container>
    </>
  );
}

export default PostPage;
