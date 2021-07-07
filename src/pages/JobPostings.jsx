import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import { Table, Button, Pagination } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostings() {



    const [jobPostings, setJobPostings] = useState([])
    //const [page, setpage] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(results => setJobPostings(results.data.data))
    }, [])

    // useEffect(()=> {
    //     let page = new JobPostingService()
    //     page.getAllByPage().then(results=> setpage(results.data.data))
    // },[])

    // const history = useHistory();
    return (

        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Veren</Table.HeaderCell>
                        <Table.HeaderCell>İş Adı</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
                        <Table.HeaderCell>İlan Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.employerCompanyName}</Table.Cell>
                                <Table.Cell>{jobPosting.jobName}</Table.Cell>
                                <Table.Cell>{jobPosting.openPosition}</Table.Cell>
                                <Table.Cell>{jobPosting.minSalary} - {jobPosting.minSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobPosting.releaseDate}</Table.Cell>
                                <Table.Cell>{jobPosting.active.toString()}</Table.Cell>
                                <Table.Cell>  <Button as={Link} to={`/jobposting/${jobPosting.id}`} content="İlan Detayı"
                                    color='blue'
                                    icon="right arrow"
                                    labelPosition="right"
                                /></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>


            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
            />

        </div>

    )
}
