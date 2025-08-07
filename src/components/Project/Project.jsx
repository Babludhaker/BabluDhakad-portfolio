import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import eshoppy from "../../Assets/Projects/eshoppy.png";
import music from "../../Assets/Projects/music.png";
import miniProject from "../../Assets/Projects/miniProject.png";
import Brightpath from "../../Assets/Projects/Brightpath.png";

import weather from "../../Assets/Projects/weather.png";

function Project() {
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
              imgPath={Brightpath}
              isBlog={false}
              title="Brightpath - Online Learning Platform"
              description="🚀BrightPath is a modern learning platform built with React.js, Node.js, Figma, and Vercel, helping students learn and grow from anywhere.  
                 It offers paid video lectures, flexible access, and community hangouts to boost your skills and stay connected.

"
              ghLink="https://github.com/Babludhaker/BrightPath-online-learning-platform"
              demoLink="https://bright-path-online-learning-platform.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="I Built a responsive  Weather App using HTML, CSS, and JavaScript with location and city-based weather. Deployed on Netlify."
              ghLink="https://github.com/Babludhaker/Weather-website"
              demoLink="https://weathergui.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eshoppy}
              isBlog={false}
              title="E-Shoppy"
              description="I created an online shopping website using React to strengthen my understanding of component-based architecture, state management, and routing."
              ghLink="https://github.com/Babludhaker/"
              demoLink="https://e-shopcart.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniProject}
              isBlog={false}
              title="Mini Project - JavaScript"
              description="I created a mini project using JavaScript to enhance my skills in DOM manipulation, event handling, and asynchronous programming."
              ghLink="https://github.com/Babludhaker/JavaScript-MiniProject"
              demoLink="https://babludhaker.github.io/JavaScript-MiniProject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="I built a music player using HTML, CSS, and JavaScript to improve my skills in audio manipulation, user interface design, and responsive layouts."
              ghLink="https://github.com/Babludhaker/music-beat"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
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

export default Project;
