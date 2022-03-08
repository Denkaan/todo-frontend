import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const options = {
    header: { "Content-Type": "application/json" },
  };

  const handleLogin = async (email, password) => {
    axios
      .post("http://localhost:8080/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data === true) {
          console.log("LOGIN SUCCESS");
          navigate("/main");
        } else if (response.data === false) {
          console.log("LOGIN FAILED");
          setShow(true);
        }
      });
  };

  const handleCredentials = () => {
    setTimeout(() => {
      setLoading(false);
      handleLogin(email, password);
    }, 1000);
  };

  return (
    <div id="login" className="main d-flex justify-content-center">
      <Card className="logincard">
        <Card.Header className="text-center">
        <img src={logo} id="logo"/>
          <h3 className="text-white">{`Logga in`}</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">{`Email`}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">{`Lösenord`}</Form.Label>
              <Form.Control
                type="password"
                placeholder="Lösenord"
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
                  {`Logga in`}
                </Button>
                <div className="text-black m-1 text-center">
                  {`Har du inget konto? `}
                  <Link to="/signup">{`Skapa konto`}</Link>
                </div>
                <div className="text-white text-center">
                  <Link to="/">Glömt lösenord?</Link>
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
                {`Fel användarnamn eller lösenord`}
              </p>
            </Card.Header>
          </Card>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};

export default Login;
