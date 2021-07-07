import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8090/api/candidates/getall")
    }
    getByCandidateId(id){
        return axios.get("http://localhost:8090/api/candidates/findById?id="+id)
    }
}