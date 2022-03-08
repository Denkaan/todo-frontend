import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TaskService from "../services/TaskService";
import "./Main.css";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isOpen: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  refreshPage() {
    window.location.reload(false);
  }

  componentDidMount() {
    TaskService.getTasks().then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  deleteTaskById(id) {
    TaskService.deleteTask(id).then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  render() {
    return (
      <div id="main-background">
      <div className="table">
        <h1 className="text-left"> ToDo Lista</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td> Titel </td>
              <td> Beskrivning </td>
              <td> Datum</td>
              <td> Tid</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr key={task.id}>
                <td> {task.title}</td>
                <td> {task.description}</td>
                <td> {task.date}</td>
                <td> {task.time}</td>
                <td>
                  <DeleteIcon type="button" onClick={this.openModal} />
                </td>
                <Modal show={this.state.isOpen}>
                  <Modal.Header>
                    <Modal.Title>RADERA TASK</Modal.Title>
                    <CloseIcon type="button" onClick={this.closeModal} />
                  </Modal.Header>
                  <Modal.Body>
                    Är du säker på att du vill radera denna "Todo"?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        this.deleteTaskById(task.id);
                        this.refreshPage();
                      }}
                      >
                      Ja
                    </Button>
                    <Button variant="secondary" onClick={this.closeModal}>
                      Nej
                    </Button>
                  </Modal.Footer>
                </Modal>
                <td>
                  <EditIcon type="button" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
      </div>
    );
  }
}

export default Main;
