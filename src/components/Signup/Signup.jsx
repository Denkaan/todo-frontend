import axios from "axios";
import { useState } from "react";
import { Alert, Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import logo from './../../assets/logo.png'

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role] = useState("user");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (email, password, role) => {
    axios
      .post("http://localhost:8080/users/createUser", {email: email, password: password, role: role})
      .then((response) => {
        if (response.data === true) {
          console.log("LOGIN SUCCESS");
          setModalShow(true);
          setLoading(false);
        } else if (response.data === false) {
          console.log("LOGIN FAILED");
          setLoading(false);
          setShow(true);
        }
      });
  };

  const handleCredentials = () => {
    setTimeout(() => {
      handleSignup(email, password, role);
    }, 1000);
  };

  return (
    <>
    <Modal
      show={modalShow}
      onHide={setModalShow}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>{`SKAPA KONTO LYCKADES!`}</Modal.Title>
      </Modal.Header>
      <Modal.Footer className="text-center d-block">
        <Button
          variant="primary"
          style={{ width: "15%" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {`Okej`}
        </Button>
      </Modal.Footer>
    </Modal>
    <div id="signup" className="main d-flex justify-content-center">
      <Card className="signupcard">
        <Card.Header className="text-center">
          <img src={logo} id="logo"/>
          <h3 className="text-white">{`Skapa konto`}</h3>
        </Card.Header>
        <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">{`Email`}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                minLength={2}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">{`Lösenord`}</Form.Label>
              <Form.Control
                type="password"
                placeholder="Lösenord"
                minLength={2}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {!loading ? (
              <div className="">
                <Button
                  style={{ width: "100%" }}
                  className="px-5"
                  variant="primary"
                  onClick={() => {
                    setLoading(true);
                    setShow(false);
                    handleCredentials();
                  }}
                >
                  {`Skapa konto`}
                </Button>
                <div className="p-4 box text-center text-black">
                {`Har du redan ett konto?`} <Link to="/">{`Logga in`}</Link>
              </div>
              </div>
            ) : (
              <div className="d-grid">
                <Button variant="primary" className="px-4" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;&nbsp;{`Laddar...`}
                </Button>
              </div>
            )}
          </Form>
        </Card.Body>
        {show ? (
          <Card className="error">
            <Card.Header className="text-center">
              <p className="text-warning m-0">
                {`Det gick inte att skapa konto`}
              </p>
            </Card.Header>
          </Card>
        ) : (
          <></>
        )}
      </Card>
    </div>
    </>
  );
};

export default Signup;
