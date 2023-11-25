import React, { Fragment, useEffect, useState } from "react";
import { Container, Label, Row } from "reactstrap";
import axios from "axios";

const HomeContain = () => {
  const [title, setTitle] = useState({
    string: "Welcome",
    message: "Let's play chess!!",
  });

  useEffect(() => {
    getTitle();
  }, []);
  const getTitle = async () => {
    await axios
      .get(
        "https://qosimd-netlify-functions-welcome.netlify.app/.netlify/functions/hello-world"
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <Fragment>
      <Container fluid>
        <div className="position-absolute top-50 start-50 translate-middle">
          <Row>
            <Label>
              <strong>{title.string}</strong>
            </Label>
            <p>{title.message}</p>
          </Row>
          <Row>
            <a href="/play" className="btn btn-primary">
              Play Chess
            </a>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomeContain;
