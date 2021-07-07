import React, { useEffect, useState } from 'react'
import ResumeService from '../services/resumeService'
import { Table, Header, Button, Icon, Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'


export default function ResumeDetails() {
    let { id } = useParams()
    const [resumes, setResumes] = useState({})
    useEffect(() => {
        let resumesService = new ResumeService()
        resumesService.findByCvId(id).then(results => setResumes(results.data.data))
    }, [id])

    return (
        <div>

            <Header size='huge' as='h2'><Image src={resumes.photo} size='huge' avatar />Kişi Bilgileri</Header>
            <Table celled fixed singleLine color={"black"} textAlign='center'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>İsim</Table.Cell>
                        <Table.Cell>{resumes.candidate?.firstName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Soyisim</Table.Cell>
                        <Table.Cell>{resumes.candidate?.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>E-mail</Table.Cell>
                        <Table.Cell>{resumes.candidate?.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Doğum Tarihi</Table.Cell>
                        <Table.Cell>{resumes.candidate?.birthYear}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Github Link</Table.Cell>
                        <Table.Cell><a href={`//${resumes.githubLink}`} target='_blank' rel="noopener noreferrer"><Button size='mini' color='black' ><Icon size='large' name='github' />Github</Button></a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Linked Link</Table.Cell>
                        <Table.Cell><a
                            href={`//${resumes.linkedLink}`}
                            target='_blank' rel="noopener noreferrer">
                            <Button
                                size='mini'
                                color='linkedin' >
                                <Icon
                                    size='large'
                                    name='linkedin' />LinkedIn</Button></a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Header as='h2'>İş Deneyimleri</Header>
            <Table celled fixed singleLine color={"black"} textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {resumes.jobExperiences?.map((jobExperience) => (
                        <Table.Row key={jobExperience.id}>
                            <Table.Cell >{jobExperience.workplaceName}</Table.Cell>
                            <Table.Cell>{jobExperience.job.name}</Table.Cell>
                            <Table.Cell>{jobExperience.startDate}</Table.Cell>
                            <Table.Cell>{jobExperience.endDate}</Table.Cell>
                        </Table.Row>
                    ))}</Table.Body>
            </Table>

            <Header as='h2'>Eğitim Aldığı Okullar</Header>
            <Table celled fixed singleLine color={"black"} textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                        <Table.HeaderCell>Bölüm</Table.HeaderCell>
                        <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitirme Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {resumes.school?.map((school) => (
                        <Table.Row key={school.id}>
                            <Table.Cell >{school.schoolName}</Table.Cell>
                            <Table.Cell>{school.departmant}</Table.Cell>
                            <Table.Cell>{school.startDate}</Table.Cell>
                            <Table.Cell >{school.endDate}</Table.Cell>
                        </Table.Row>
                    ))}</Table.Body>
            </Table>

            <Header as='h2'>Program ve Teknolojiler</Header>
            <Table celled fixed singleLine color={"black"} textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >Program/Teknoloji Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {resumes.programmingOrTechnology?.map((technology) => (
                        <Table.Row key={technology.id}>
                            <Table.Cell >{technology.programmingLanguageName}</Table.Cell>
                        </Table.Row>))}</Table.Body>

            </Table>



            <Header as='h2'>Yabancı Diller</Header>
            <Table celled fixed singleLine color={"black"} textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >Dil Adı</Table.HeaderCell>
                        <Table.HeaderCell >Dil Seviyesi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {resumes.foreignLanguages?.map((language) => (
                        <Table.Row key={language.id}>
                            <Table.Cell >{language.languageName}</Table.Cell>
                            <Table.Cell >{language.languageLevel}</Table.Cell>
                        </Table.Row>
                    ))}</Table.Body>
            </Table>
        </div>
    )

}
