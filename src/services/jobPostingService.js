import axios from "axios"

export default class JobPostingService{

    getJobPostings(){

        return axios.get("http://localhost:8090/api/jobAdvertisement/getAll")
    }

    getByJobPostingId(id){
        return axios.get("http://localhost:8090/api/jobAdvertisement/findbyid?id="+id)
    }

    // getAllByPage(page,size){
    //     return axios.get("http://localhost:8090/api/jobAdvertisement/getAllByPage?pageNo="+page+"&pageSize="+size)

    //     //return axios.get("http://localhost:8090/api/jobAdvertisement/getAllByPage?page=${pageNo}&size=${pageSize})
    // }

}