import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/amazon.png";
import Notenest from "../../Assets/Projects/Notenest.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import askGemini from "../../Assets/Projects/askGemini.png"
import shopper from "../../Assets/Projects/shopper.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askGemini}
              isBlog={false}
              title="AskGemini"
              description="Built an AI assistant using React,TailwindCSS and Gemini API"
              ghLink="https://github.com/Sreejith2/AskGemini"
              demoLink="https://askgemini.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notenest}
              isBlog={false}
              title="NoteNest"
              description="NoteNest is a simple and efficient notes keeper application that allows users to create, organize, and manage their notes."
              ghLink="https://github.com/Sreejith2/Keeper-App"
              demoLink="https://notekeeperapp12.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog-Website"
              description="Blog website build with Node.js,Express.js,PostgreSQL and EJS.Include Posting,Deleting and Editing Features"
              ghLink="https://github.com/Sreejith2/Blog"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Amazon Clone"
              description="Built an amazon clone using React and TailwindCSS"
              ghLink="https://github.com/Sreejith2/amazon"
              demoLink="https://amazon-clone-124.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopper}
              isBlog={false}
              title="Shopper"
              description="Built an E-commerce website using React.js and TailwindCSS"
              ghLink="https://github.com/Sreejith2/E-Commerce-Website"
              demoLink="https://dressify-123.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
