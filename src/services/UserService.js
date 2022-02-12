import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/poll/getpollslist';

class UserService {
    getPolls(){
        axios.get(USERS_REST_API_URL);
    }
}
export default new UserService();