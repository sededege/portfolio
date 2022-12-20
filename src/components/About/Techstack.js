import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
  DiPhp
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
 SiHtml5,
 SiCss3
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="m-auto" />
        <p style={{fontSize: "20px" }}>Javascript</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="m-auto" />
        <p style={{fontSize: "20px" }}>Node</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="m-auto" />
        <p style={{fontSize: "20px" }}>React</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="m-auto" />
        <p style={{fontSize: "20px" }}>Mongo db</p>
      </Col>
     {/*  <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="m-auto" />
        <p style={{fontSize: "20px" }}>Github</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="m-auto" />
        <p style={{fontSize: "20px" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 className="m-auto" />
        <p style={{fontSize: "20px" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 className="m-auto" />
        <p style={{fontSize: "20px" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql className="m-auto" />
        <p style={{fontSize: "20px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp className="m-auto" />
        <p style={{fontSize: "20px" }}>PHP</p>
      </Col>
    {/*   <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
    </Row>
  );
}

export default Techstack;
