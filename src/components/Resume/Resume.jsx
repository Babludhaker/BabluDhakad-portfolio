import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/BABLU DHAKER_Resume.pdf"; // Add your PDF path here
import cvDemo from "../../assets/cvDemo.png"; // Add your demo image path here
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { IoOpen } from "react-icons/io5";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [showPdf, setShowPdf] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            onClick={() => setShowPdf(!showPdf)}
            style={{ maxWidth: "250px", marginRight: "15px" }}
          >
            <AiOutlineEye />
            &nbsp;{showPdf ? "Hide Resume" : "View Resume"}
          </Button>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <IoOpen />
            &nbsp; Open Resume
          </Button>
        </Row>

        {showPdf && (
          <Row className="justify-content-center mb-5 ">
            <Col md={8} className="text-center ">
              <Image
                src={cvDemo}
                alt="CV Demo"
                fluid
                thumbnail
                style={{
                  maxHeight: "800px",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
              />
              <p className="mt-3">
                Preview of my Resume - Click 'Open Resume' to see full document
              </p>
            </Col>
          </Row>
        )}

        {!showPdf && (
          <Row className="resume justify-content-center">
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              loading={<div>Loading PDF...</div>}
              error={
                <div className="text-center">
                  <p
                    style={{
                      fontFamily: "-webkit-body, sans-serif",
                      margin: "20px 0",
                      display: "inline-block",
                      fontSize: "5rem",
                      color: "#b87aa85c",
                      textShadow:
                        "3px 3px 0 #40159e, 6px 6px 0 rgba(0, 0, 0, 0.1)",
                      transform: "rotateX(15deg)",
                      transformStyle: "preserve-3d",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      perspective: "1000px",
                      textAlign: "center",
                    }}
                  >
                    BABLU DHAKAD CV .
                  </p>
                </div>
              }
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        )}

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
