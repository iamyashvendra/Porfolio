import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Yashvendra Singh Jadaun</span>{" "}
            from <span className="purple">Karauli, Rajasthan, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">Full Stack Developer</span> and a{" "}
            <span className="purple">BCA</span> student at
            <span className="purple"> Vivekananda Global University, Jaipur</span>.
            <br />
            <br />I enjoy building modern web applications and exploring new technologies. I’m passionate about creating practical, user-friendly projects using technologies like{" "}
            <span className="purple">React.js, Node.js, Express.js, MySQL,</span> and{" "}
            <span className="purple">MongoDB</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography & Cinematic Videography 📸🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing & Content Creation 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Turning ideas into something worth remembering.”{" "}
          </p>
          <footer className="blockquote-footer">Yashvendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
