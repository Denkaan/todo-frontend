import axios from "axios";
import { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Main from "../Main/Main";
import UserService from "../services/UserService";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  } 
  
  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  } 

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleLogin(email, password) {
    axios.get("http://localhost:8080/users/login/" + email + "/" + password)
    .then((response) => {
      if(response.data === true) {
        console.log("LOGIN SUCCESS") 
      } else if (response.data === false) {
        console.log("LOGIN FAILED")
      }
    });
  }

  render() {
    return (
      <div className="main d-flex justify-content-center">
        <Card className="logincard">
          <Card.Header className="text-center">
            <h3 className="text-white">{`Logga in`}</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">{`Email`}</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  email={this.state.email}
                  onChange={this.updateEmail}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">{`Lösenord`}</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  email={this.state.password}
                  onChange={this.updatePassword}
                  />
              </Form.Group>
              <div className="">
                <Button
                  style={{ width: "100%" }}
                  className="px-5"
                  variant="primary"
                  onClick={() => {this.handleLogin(this.state.email, this.state.password)}}
                  >
                  {`Logga in`}
                </Button>
                <div className="text-white m-1 text-center">
                  {`Har du inget konto? `}
                  <Link to="/main">{`Skapa konto`}</Link>
                </div>
                <div className="text-white m-1 text-center">
                  <Link to="/forgot-password">Glömt lösenord?</Link>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  };
};

export default Login;
