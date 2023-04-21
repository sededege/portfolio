import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobeaftereffects,
} from "react-icons/si";

function Tooldesign() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons shadow-md">
        <SiAdobepremierepro className="m-auto" />
        <p style={{fontSize: "20px" }}>Premiere Pro</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons shadow-md">
        <SiAdobeaftereffects className="m-auto" />
        <p style={{fontSize: "20px" }}>After effects</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons shadow-md">
        <SiAdobephotoshop className="m-auto" />
        <p style={{fontSize: "20px" }}>Photoshop</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons shadow-md">
        <SiAdobeillustrator className="m-auto" />
        <p style={{fontSize: "20px" }}>Illustrator</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons shadow-md">
        <SiAdobexd className="m-auto" />
        <p style={{fontSize: "20px" }}>Adobe XD</p>
      </Col>
    </Row>
  );
}

export default Tooldesign;
