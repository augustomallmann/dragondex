import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#191D24",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <p className="py-3 text-center" style={{ color: "#fff", margin: "0" }}>
          Desenvolvido por{" "}
          <a href="https://www.linkedin.com/in/augusto-mallmann/">
            Augusto Mallmann
          </a>
        </p>
      </Container>
    </div>
  );
}
