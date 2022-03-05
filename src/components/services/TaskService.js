import axios from "axios";

class TaskService {

    getTasks() {
        return axios.get("http://localhost:8080/tasks/getAll");
    }

    deleteTask(id) {
        return axios.delete("http://localhost:8080/tasks/delete/" + id)
    }


}

export default new TaskService();