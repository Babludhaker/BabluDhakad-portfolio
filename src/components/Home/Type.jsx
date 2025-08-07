import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Node Js Developer",
          "React Js Developer",
          "Java , MySQL, MONGO DB, POSTMAN, EXPRESS JS, DATA STRUCTURE, ALGORITHM",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
