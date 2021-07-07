import axios from "axios";

export default class WorktimeService{
    getWorktime(){
        return axios.get("http://localhost:8090/api/worktime/getAll")
    }
}