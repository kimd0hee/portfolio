import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaVuejs } from "react-icons/fa";
import {Col, Row} from "react-bootstrap";
import {SiSpringboot, SiAmazons3, SiAmazonaws} from "react-icons/si";
function ProjectCards0(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={1} md={2} className="tech-icons">
              <FaVuejs />
          </Col>
          <Col xs={1} md={2} className="tech-icons">
              <SiSpringboot />
          </Col>
          <Col xs={1} md={2} className="tech-icons">
              <SiAmazonaws />
          </Col>
          </Row>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards0;
