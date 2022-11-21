import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cv.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Te cuento <span className="purple"> algo ...</span>
            </h1>
            <p className="home-about-body">
              Como licenciado en diseño multimedia busco diferenciarme adaptándome a cada desafío de manera rápida y entusiasta gracias a mis conocimientos hibridos.
              <br />
              <br />A lo largo de mi carrera aprendí las bases en
              <i>
                <b className="purple"> Javascript, HTML, CSS, MySQL y PHP. </b>
              </i>
              <br />
              <br />
              Actualmente estoy interesado formar parte de un equipo de trabajo disciplinado con la ambición de desarrollar grandes proyectos en la <b className="purple">Web 2</b>. &nbsp;

              <br />
              <br />
              Disfruto apasionadamente el uso de tecnologias como <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  las modernas librerias y frameworks de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ objectFit: 'cover', borderRadius: '400px', width: '400px', height: '400px' }} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentrame en</h1>
            <p>
              Sentite libre de <span className="purple">conectar </span>conmigo!
            </p>
            <ul className="home-about-social-links">
              {/*  <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sebagtech/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sebagonzalez_97/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
