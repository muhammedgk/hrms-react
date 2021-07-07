import React,{useEffect,useState} from 'react'
import CandidateService from '../services/candidateService';
import { Table,Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

export default function CandidateDetails() {
    let {id} = useParams()

    const [candidate, setCandidate] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getByCandidateId(id).then(resume => setCandidate(resume.data.data))
    },[id])
    return (
        <div>
             <Header as='h2'>Kişi Bilgileri</Header>
            <Table celled fixed singleLine color={"black"}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>İsim</Table.Cell>
                        <Table.Cell>{candidate.firstName}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Soyisim</Table.Cell>
                        <Table.Cell>{candidate.lastName}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>E-mail</Table.Cell>
                        <Table.Cell>{candidate.email}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Doğum Tarihi</Table.Cell>
                        <Table.Cell>{candidate.birthYear}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            
        </div>
    )
}
