import axios from "axios";

class TaskService {

    getTasks() {
        return axios.get("http://localhost:8080/tasks/getAll");
    }

    getTasksByAssignedFalse() {
        return axios.get("http://localhost:8080/tasks/taskByAssigned/false");
    }

    getTasksByAssignedTrue() {
        return axios.get("http://localhost:8080/tasks/taskByAssigned/true");
    }

    deleteTask(id) {
        return axios.delete("http://localhost:8080/tasks/delete/" + id)
    }


}

export default new TaskService();