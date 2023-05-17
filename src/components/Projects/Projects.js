import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard0 from "./ProjectCards0";
import Particle from "../Particle";

import TodoSNS from "../../Assets/Projects/TodoSNS.png";


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
            <ProjectCard0
              imgPath={TodoSNS}

              isBlog={false}
              title="Share Todo List (SNS type)"
              description="good"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
