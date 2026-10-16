import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into practical products and continuously improving my skills by working on real-world projects.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, Express.js, MySQL, and MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  full-stack web applications, REST APIs, authentication systems, and database-driven applications,{" "}
                </b>
              </i>
              while focusing on clean code and intuitive user experiences.
              <br />
              <br />
             Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frontend technologies like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Tailwind CSS</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
