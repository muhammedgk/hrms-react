import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostings() {


    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(results => setJobPostings(results.data.data))
    }, [])

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
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
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
                                <Table.Cell>{jobPosting.active.toString()}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
