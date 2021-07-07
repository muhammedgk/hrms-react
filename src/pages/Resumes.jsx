import React, { useState, useEffect } from 'react'
import { Table, Button } from 'semantic-ui-react'
import ResumeService from '../services/resumeService'
import { Link } from 'react-router-dom'

export default function Resumes() {
    const [resumes, setResumes] = useState([])

    useEffect(() => {
        let resumesService = new ResumeService()
        resumesService.getResumes().then(results => setResumes(results.data.data))
    }, [])
    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Mail Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        resumes.map(resume => (
                            <Table.Row key={resume.id}>

                                <Table.Cell>{resume.candidateFirstName}</Table.Cell>
                                <Table.Cell>{resume.candidateLastName}</Table.Cell>
                                <Table.Cell>{resume.candidateEmail}</Table.Cell>
                                <Table.Cell>{resume.candidateBirthYear}</Table.Cell>
                                <Table.Cell>  <Button as={Link} to={`/resumes/${resume.id}`} content="Detay"
                                    color='blue'
                                    icon="right arrow"
                                    labelPosition="right"
                                /></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
