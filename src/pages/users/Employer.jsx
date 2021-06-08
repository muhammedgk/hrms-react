import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from '../../services/employerService'

export default function Employer() {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(results=>setEmployers(results.data.data))
    },[])

    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Site</Table.HeaderCell>
                        <Table.HeaderCell>Mail Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Mail Adresi</Table.HeaderCell>
                        <Table.HeaderCell>İletişim Numarası</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.websiteEmail}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
