import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import TaskService from "../services/TaskService";
import "./Main.css";
import { Checkbox } from "@mui/material";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isOpen: false,
      checked: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handleChecked(e) {
    this.setState({checked: e.target.checked});
  }
  
  refreshPage() {
    window.location.reload(false);
  }

  componentDidMount() {
    TaskService.getTasksByAssignedFalse().then((response) => {
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
                <td> Radera</td>
                <td> Redigera</td>
                <td> Klar</td>
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
                      ??r du s??ker p?? att du vill radera denna "Todo"?
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
                  <td>
                    <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked.bind(this)}
                    color="primary" />
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
