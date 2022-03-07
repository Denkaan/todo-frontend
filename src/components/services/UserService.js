import axios from "axios";

class UserService {

    Login() {
        return axios.get("http://localhost:8080/users/login");
    }



}

export default new UserService();