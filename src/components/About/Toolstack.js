import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApple,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple className="m-auto" />
        <p style={{fontSize: "20px"}}>Mac Os</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="m-auto" />
        <p style={{fontSize: "20px" }}>Vs Code</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="m-auto" />
        <p style={{fontSize: "20px" }}>Postman</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="m-auto" />
        <p style={{fontSize: "20px" }}>Vercel</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku className="m-auto" />
        <p style={{fontSize: "20px" }}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
