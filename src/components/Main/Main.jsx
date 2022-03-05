import { Button } from "@mui/material";
import React, { Component } from "react";
import TaskService from "../services/TaskService";
import "./Main.css";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

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
      <div className="table">
        <h1 className="text-left"> List of Tasks</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td> Title </td>
              <td> Description </td>
              <td> Date</td>
              <td> Time</td>
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
                  <Button
                    onClick={() => {
                      this.deleteTaskById(task.id);
                      this.refreshPage();
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                <Button>Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
