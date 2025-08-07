import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bablu Dhakad </span>
            from <span className="purple"> Neemuch (M.P.), India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            I’m currently looking for a{" "}
            <span className="purple">Software Developer </span> role where I can
            apply my skills and grow as a{" "}
            <span className="purple">developer </span>.
            <br />
            I’m a recent graduate in{" "}
            <span className="purple">Computer Science Engineering </span> from
            MIT Mandsaur, with a CGPA of 8.0 .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I aim to build products that people love to use !"{" "}
          </p>
          <footer className="blockquote-footer">Bablu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
