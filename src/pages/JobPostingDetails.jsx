import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Button, Card,  Table,  Header } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingDetails() {

    let { id } = useParams()

    const [jobPostings, setJobPostings] = useState({})

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByJobPostingId(id).then(results => setJobPostings(results.data.data))
    }, [id])

    return (
        <div>

           
                    <Header as='h2'>İlan Bilgileri</Header>
                    <Table celled fixed singleLine color={"black"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                                <Table.HeaderCell>Detaylar</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>İş Pozisyonu</Table.Cell>
                                <Table.Cell>{jobPostings.job?.name}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Şehir</Table.Cell>
                                <Table.Cell>{jobPostings.city?.cityName}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Çalışma Yeri</Table.Cell>
                                <Table.Cell>{jobPostings.workplace?.name}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Çalışma Zamanı</Table.Cell>
                                <Table.Cell>{jobPostings.worktime?.name}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Minimum Maaş</Table.Cell>
                                <Table.Cell>{jobPostings.minSalary}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Maksimum Maaş</Table.Cell>
                                <Table.Cell>{jobPostings.maxSalary}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Açık Pozisyonlar</Table.Cell>
                                <Table.Cell>{jobPostings.openPosition}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Yayınlanma Tarihi</Table.Cell>
                                <Table.Cell>{jobPostings.releaseDate}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                                <Table.Cell>{jobPostings.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    



                        <Header as='h2'>Şirket Bilgileri</Header>

                        <Table celled fixed singleLine color={"black"}>
                            <Table.Header>
                                
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Şirket Adı</Table.Cell>
                                    <Table.Cell>{jobPostings.employer?.companyName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Şehir</Table.Cell>
                                    <Table.Cell>{jobPostings.employer?.website}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Telefon Numarası</Table.Cell>
                                    <Table.Cell>{jobPostings.employer?.phoneNumber}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Şirket Maili</Table.Cell>
                                    <Table.Cell>{jobPostings.employer?.websiteEmail}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                

                <Card fluid>
                    <Card.Content textAlign="left" header="Açıklama" />
                    <Card.Content textAlign="left">
                        {jobPostings.jobDescription}
                    </Card.Content>
                </Card>
                <div className='ui two buttons'>
                    <Button attached="top" basic color='green'>
                        Başvur
                    </Button>
                    <Button attached="top" basic color='violet'>
                        Favorilerine Ekle
                    </Button>

                </div>


        </div >
            )
}
