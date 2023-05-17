import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
    DiUbuntu,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
    DiPython

} from "react-icons/di";
import {
    SiAmazons3,
    SiAmazonaws,
    SiMariadb,
    SiCsharp,
    SiCoursera,
    SiSpringboot
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCoursera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>

    </Row>
  );
}

export default Techstack;
