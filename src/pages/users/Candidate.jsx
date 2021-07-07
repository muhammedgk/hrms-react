
import React, { useEffect, useState } from 'react'
import CandidateService from '../../services/candidateService'
import { Table,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Candidate() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then(resume => setCandidates(resume.data.data))
    },[])


    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>TC No</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.nationalId}</Table.Cell>
                                <Table.Cell>{candidate.birthYear}</Table.Cell>
                                <Table.Cell>  <Button as={Link} to={`/candidate/${candidate.candidateId}`} content="Detay"
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
