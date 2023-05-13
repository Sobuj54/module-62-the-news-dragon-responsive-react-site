import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tempora
        magnam non, ea porro accusantium facere blanditiis quam consectetur
        aspernatur ad debitis quibusdam dolore, eos architecto laboriosam nihil,
        libero vel. Repudiandae pariatur itaque vero exercitationem minus,
        recusandae sit aliquid adipisci.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
