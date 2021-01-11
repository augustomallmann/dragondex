import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Hero({
  children,
  headerOne,
  descriptionText,
  descriptionTextTwo,
  bgDark,
  fullHeight,
  colSize,
  single,
}) {
  return (
    <div className={`${bgDark ? "bg-dark-custom" : "bg-light-custom"} `}>
      <Container>
        <Row
          className={`${fullHeight ? "height-100" : null} align-items-center`}
        >
          <Col lg={colSize || "6"} className={single ? "d-none" : ""}>
            <h1 className="header-one">{headerOne}</h1>
            <p className="description-text">{descriptionText}</p>
            <p className="description-text">{descriptionTextTwo}</p>
          </Col>
          <Col lg={colSize || "6"}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
