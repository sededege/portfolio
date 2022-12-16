import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsCameraVideo, BsGithub } from "react-icons/bs";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import { FiEye } from 'react-icons/fi';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        { props.isBlog || props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank"             style={{   marginTop: '10px'}}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> ) }
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px",  marginTop: '10px'}}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        
          {props.video && (
          <Button
            variant="primary"
            href={props.video}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: '10px' }}
          >
            <BsCameraVideo /> &nbsp;
            {"Video"}
          </Button>
        )}
          {props.pdf && (
          <Button
          variant="primary"
          href={props.pdf} 
          target="_blank"
     
          style={{ marginLeft: "10px",  marginTop: '10px' }}
        >
          <AiOutlineDownload />
          &nbsp;Metavero.pdf
        </Button>
        )}
          {props.maqueta && (
          <Button
          variant="primary"
          href={props.maqueta} 
          target="_blank"
     
          style={{ marginLeft: "10px", marginTop: '10px'}}
        >
          <FiEye/>
          &nbsp; Wireframe
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
