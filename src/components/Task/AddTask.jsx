import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const navigate = useNavigate();

  const createTask = async (title, description, date, time) => {
    axios
      .post("http://localhost:8080/tasks/add", {title: title, description: description, date: date, time: time})
      .then((response) => {
            if(response.status === 200){
                navigate("/main");
            }else if(response.status === 408){
                console.log("SOMETHING WENT WRONG")
                this.setState({ requestFailed: true })
            }
        })
      }

  const handleCreateTask = () => {
    setTimeout(() => {
      createTask(title, description, date, time);
    }, 1000);
  };


  return (
    <Row className="mx-auto h-100 justify-content-center">
      <Card className="add-view-card">
        <Card.Body className="text-black">
          <h1 className="text-center">{`Lägg till ToDo`}</h1>
          <Form className="p-4">
            <Row className="d-flex justify-content-between">
              <Form.Group as={Col} className="mb-3">
                <p className="m-auto">{`Titel`}</p>
                <Form.Control
                  required
                  minLength={2}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <p className="m-auto">{`Tid`}</p>
                <Form.Control
                  required
                  minLength={2}
                  placeholder="xx.xx-xx.xx"
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <p className="m-auto">{`Datum`}</p>
                <Form.Control
                  required
                  minLength={2}
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="d-flex justify-content-between">
              <Form.Group as={Col} className="mb-3">
                <p className="m-auto">{`Beskrivning`}</p>
                <Form.Control
                  as="textArea"
                  required
                  minLength={2}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Form>
          <div className="text-center p-4">
            <Button
              variant="primary"
              onClick={() => {
                handleCreateTask();
              }}
            >
              {`Lägg till`}
            </Button>
            &nbsp;
            <Button variant="secondary" onClick={() => navigate("/main")}>
              {`Stäng`}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AddTask