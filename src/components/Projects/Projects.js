import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lms from "../../Assets/Projects/lms.png";
import emotion from "../../Assets/Projects/emotion.png";
import foodhub from "../../Assets/Projects/foodhub.png";
import quickchat from "../../Assets/Projects/chatapp.png";
import suicide from "../../Assets/Projects/suicide.png";
import homecare from "../../Assets/Projects/homecare.png";

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
              imgPath={quickchat}
              isBlog={false}
              title="Quickchat"
              description="A real-time full-stack chat application built with React.js, Node.js, Express.js, MongoDB, Socket.io, and Cloudinary. It supports instant messaging, typing indicators, unread messages, online user status, chat requests, secure authentication, and image sharing."
              ghLink="https://github.com/iamyashvendra/Chat-app"
              demoLink="https://quickchat-gilt-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homecare}
              isBlog={false}
              title="HomeCare"
              description="A full-stack home service platform built with React.js, Node.js, Express.js, MongoDB, Clerk, and Cloudinary. The platform connects users with home service professionals through dynamic service categories, provider registration, reviews, secure authentication, and direct communication."
              ghLink="https://github.com/iamyashvendra/Homecare"
              demoLink="https://homecare-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodhub}
              isBlog={false}
              title="FoodHub"
              description="A full-stack food ordering application built with React.js, Node.js, Express.js, MongoDB, Stripe, and Cloudinary. It includes user authentication, cart management, RESTful APIs, online payment integration, and a responsive frontend built with React.js and Tailwind CSS."
              ghLink="https://github.com/iamyashvendra/FoodHub-Fullstack"
              demoLink="https://food-hub-frontend-sable.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="LMS"
              description="A full-stack Learning Management System built with React.js, Node.js, Express.js, MongoDB, Stripe, and Clerk. It includes secure authentication, course management, progress tracking, ratings, and a responsive interface using React Context API."
              ghLink="https://github.com/iamyashvendra/Lms"
              demoLink="https://lms-frontend-kohl-eight.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;