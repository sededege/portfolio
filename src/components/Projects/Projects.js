import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mora from "../../Assets/Projects/mora.png";
import myexp from "../../Assets/Projects/myexp.png";
import pdf from '../../Assets/metavero.pdf'
import metavero from "../../Assets/Projects/metavero.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
        My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
        Below you will find some of the projects carried out throughout my career.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mora}
              isBlog={false}
              title="Mora Fit Uy"
              description="Eccommerce developed in React JS + Tailwind CSS, Backend in Firebase, REST API integration with Mercadopago both through Node JS. Status: In development. Year: 2022"
              ghLink="https://github.com/sededege/moratest"
              demoLink="https://moratest.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metavero}
              /* isBlog={true} */
              title="Metavero"
              description="My final project as a multimedia designer graduate was an Augmented Reality product display for Veromobili (Brazilian furniture company based in Uruguay). Developed in React JS + Material UI and the backend in Wordpress. The great challenge of this project was to create a bridge between Wordpress and React JS. The company had its database in Wordpress, which is why it was done this way. I designed a sub-brand called Metavero under the values ​​that the company seeks to transmit. Download the pdf to learn about my biggest project so far! Status: Completed, Year: 2021"
              /* ghLink="https://github.com/sededege/myexpenses" */
              /* demoLink="https://my-expenses-five.vercel.app/dash" */
              video='https://www.youtube.com/watch?v=VKGTRedpx6M'
              pdf={pdf}
              maqueta='https://xd.adobe.com/view/a643ca33-2dbf-4c93-b580-0a7ec695de75-f310/screen/d33988a1-73d3-4781-b385-836dade2c1cc?fullscreen'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myexp}
              isBlog={false}
              title="My Expenses"
              description="Dashboard of expenses and income. Developed in React JS + Bootstrap + Material UI, Backend in MongoDB with Node JS + Postman. Status: Completed, Year: 2022"
              ghLink="https://github.com/sededege/myexpenses"
              demoLink="https://my-expenses-five.vercel.app/dash"
              video='https://www.youtube.com/watch?v=k7My7laKgGA&feature=youtu.be'
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
