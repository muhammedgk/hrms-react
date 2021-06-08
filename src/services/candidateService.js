import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8090/api/candidates/getall")
    }
}