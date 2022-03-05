import axios from "axios";

class UserService {

    handleLogin(email, password) {
        return axios.get("http://localhost:8080/users/login/", {email, password});
    }



}

export default new UserService();