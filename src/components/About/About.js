import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tooldesign from "./Tooldesign";

function About() {
  return (
    <Container fluid className="text-blue-500">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 
            className="mt-10"
            style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="text-gray-500">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="text-gray-500">
        Professional <strong className="text-blue-500">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-gray-500">
        <strong className="text-blue-500">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="text-gray-500">
        Design <strong className="text-blue-500">Programs </strong>
        </h1>
        <Tooldesign/>

    {/*     <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
