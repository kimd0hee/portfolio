import React from "react";
import ui from "../../Assets/ui.png";
import {Col, Row} from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiUnity,
    SiIntellijidea,
    SiAnaconda,
    SiFilezilla,
    SiArduino

} from "react-icons/si";

import {DiUbuntu} from "react-icons/di";
import logo from "../../Assets/logo.png";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiUnity/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAnaconda/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={ui} style={{width:'70px', height: '70px'}} alt="brand" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiArduino/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiUbuntu/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFilezilla/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>

        </Row>
    );
}

export default Toolstack;
