import axios from "axios";

export default class ResumeService{
    getResumes(){
        return axios.get("http://localhost:8090/api/cv/getAll")
    }

    findByCvId(id){
        return axios.get("http://localhost:8090/api/cv/findByCvId?id="+id)
    }


}