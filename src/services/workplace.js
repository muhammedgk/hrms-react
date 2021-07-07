import axios from "axios";

export default class WorkplaceService{
    getWorkplace(){
        return axios.get("http://localhost:8090/api/workplace/getAll")
    }
}