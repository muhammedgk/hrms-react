import axios from "axios"

export default class JobPostingService{

    getJobPostings(){

        return axios.get("http://localhost:8090/api/jobAdvertisement/getAll")
    }

}