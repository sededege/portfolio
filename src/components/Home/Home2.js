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
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a multimedia design graduate, I seek to differentiate myself by adapting to each challenge quickly and enthusiastically thanks to my hybrid knowledge.              <br />
              <br />Throughout my career I have learned the basics in 
              <i>
                <b className="purple"> Javascript, HTML, CSS, MySQL y PHP. </b>
              </i>
              <br />
             
              <br />
              In the last 3 years I professionalized in <b className="purple">Frontend development</b>. In this process I have learned the basics of backend development because I needed them to develop my desired projects/apps. 
              <br></br>
              So, today I am a <b className="purple">Full stack developer</b> with hybrid knowledge in <b className="purple">React JS and Node JS</b>. Having worked with databases like Mongo db, Firebase.
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
          <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className='flex w-full m-0 p-0 justify-center gap-4'>
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
              <li className="bg-white w-10 h-10 rounded-full items-center flex justify-center">
                <a
                  href="https://www.linkedin.com/in/sebagtech/"
                  target="_blank"
                  rel="noreferrer"
              
                >
                  <FaLinkedinIn className="text-purple-500 " />
                </a>
              </li>
              <li className="bg-white w-10 h-10 rounded-full items-center flex justify-center">
                <a
                  href="https://www.instagram.com/sebagonzalez_97/"
                  target="_blank"
                  rel="noreferrer"
                 
                >
                  <AiFillInstagram className="text-purple-500 " />
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
