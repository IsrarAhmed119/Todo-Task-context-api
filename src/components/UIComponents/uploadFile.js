import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MultiFileUpload from "./FileUpload/multiFileUpload";
import SingleFileUpload from "./FileUpload/singleFileUpload";

function UploadFile() {
  return (
    <>
      <Container fluid>
        <h1>UploadFile--------Compo--</h1>
        <Row>
          <Col>
            <SingleFileUpload />
          </Col>
          <Col>
            <MultiFileUpload />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UploadFile;
