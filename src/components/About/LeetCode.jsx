import LeetCodeCalendar from "leetcode-calendar";
import React from "react";
import { Row, Col } from "react-bootstrap";

function LeetCode() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        marginBottom: "20px",
      }}
    >
      <Col md={6} style={{ textAlign: "center" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">LeetCode</strong> Stats
        </h1>
        <img
          src="https://leetcard.jacoblin.cool/babludhakad01"
          alt="LeetCode Stats"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
        />
      </Col>
    </Row>
  );
}

export default LeetCode;
