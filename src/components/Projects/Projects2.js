import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mora from "../../Assets/Projects/mora.png";
import myexp from "../../Assets/Projects/myexp.png";
import pdf from '../../Assets/metavero.pdf'
import metavero from "../../Assets/Projects/metavero.jpg"
import Fullpage from "./Fullpage";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Fullpage/>
    </Container>
  );
}

export default Projects;
