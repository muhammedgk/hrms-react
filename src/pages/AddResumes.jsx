import React, { useEffect, useState } from 'react'
import CityService from '../services/cityService'
import JobService from '../services/jobService'
import WorktimeService from '../services/worktime'
import WorkplaceService from '../services/workplace'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { Button, Card, Form, FormField, Label } from "semantic-ui-react";

export default function AddResumes() {
    const [cities, setCities] = useState([])
    const [jobs, setJobs] = useState([])
    const [workplaces, setWorkplaces] = useState([])
    const [worktimes, setWorktimes] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(results => setCities(results.data.data))
    }, [])

    useEffect(() => {
        let workplaceService = new WorkplaceService()
        workplaceService.getWorkplace().then(results => setWorkplaces(results.data.data))
    }, [])

    useEffect(() => {
        let worktimeService = new WorktimeService()
        worktimeService.getWorktime().then(results => setWorktimes(results.data.data))
    }, [])

    useEffect(() => {
        let jobService = new JobService()
        jobService.getJob().then(results => setJobs(results.data.data))
    }, [])

    const cityOptions = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city.id,
    }));

    const jobOptions = jobs.map((job) => ({
        key: job.id,
        text: job.name,
        value: job.id,
    }));

    const worktimeOptions = worktimes.map((worktime) => ({
        key: worktime.id,
        text: worktime.name,
        value: worktime.id,
    }));

    const workplaceOptions = workplaces.map((workplace) => ({
        key: workplace.id,
        text: workplace.name,
        value: workplace.id,
    }));

    const initialValues = {
        cityId: "",
        jobId: "",
        workplaceId: "",
        worktimeId: "",
        minSalary: "",
        maxSalary: "",
        openPosition: "",
        applicationDeadline: "",
        jobDescription: "",
    }
    const schema =
        Yup.object({
            cityId: Yup.string().required("Lütfen Şehir Seçiniz"),
            jobId: Yup.string().required("Lütfen Meslek Seçiniz"),
            workplaceId: Yup.string().required("Lütfen Çalışma Yerinizi Seçiniz"),
            worktimeId: Yup.string().required("Lütfen Çalışma Zamanınızı Seçininiz"),
            openPosition: Yup.number().required("Lütfen Açık Pozisyon Sayısını Giriniz"),
            applicationDeadline: Yup.date().required("Lütfen Son Tarihi Giriniz"),
        })

    return (
        <div>
            <Card fluid>
                <Card.Content header='İş İlanı Ekle' />
                <Card.Content>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}

                        onSubmit={(values) => {
                            console.log(values)
                        }}>

                        {
                            ({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            id="jobId"
                                            name='jobId'
                                            options={jobOptions}
                                            label="Meslek"
                                            placeholder="Meslek Seçiniz"
                                            search
                                            selection
                                        ></Form.Select>
                                        
                                        <Form.Select
                                            id="cityId"
                                            name='cityId'
                                            options={cityOptions}
                                            label="Şehir"
                                            placeholder="Şehir Seçiniz"
                                            search
                                            selection
                                        ></Form.Select>
                                    </Form.Group>
                                    <Form.Group widths="equal">
                                        <Form.Select
                                            id="worktimeId"
                                            name='worktimeId'
                                            options={worktimeOptions}
                                            label="Çalışma Zamanı"
                                            placeholder="Çalışma Yerini Seçiniz"
                                            search
                                            selection
                                        ></Form.Select>
                                        <Form.Select
                                            id="workplaceId"
                                            name='workplaceId'
                                            options={workplaceOptions}
                                            label="Çalışma Yeri"
                                            placeholder="Çalışma Yerini Seçiniz"
                                            search
                                            selection
                                        ></Form.Select>
                                    </Form.Group>
                                    <Form.Group widths='equal'>

                                        <FormField>
                                            <label>Açık Pozisyon Sayısı</label>
                                            <Field
                                                id="openPosition"
                                                name="openPosition"
                                                placeholder="Açık Pozisyon Sayısını Giriniz"
                                                type='number'
                                            />
                                            <ErrorMessage name='openPosition' render={error =>
                                                <Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                                        </FormField>
                                        <FormField>
                                            <label>Son Başvuru Tarihi</label>
                                            <Field
                                                id="applicationDeadline"
                                                name="applicationDeadline"
                                                placeholder="Son Başvuru Tarihini Giriniz"
                                                type='date'
                                            />
                                        </FormField>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <FormField>

                                            <label >Minumum Maaş</label>
                                            <Field
                                                id="minSalary"
                                                name="minSalary"
                                                positive='true'
                                                placeholder="Minumum Maaşı Giriniz"
                                                type='number'
                                            />
                                        </FormField>
                                        <FormField>
                                            <label >Maximum Maaş</label>
                                            <Field
                                                id="maxSalary"
                                                name="maxSalary"
                                                placeholder="Maximum Maaşı Giriniz"
                                                type='number'
                                            />
                                        </FormField></Form.Group>
                                    <FormField>
                                        <label >Açıklama</label>
                                        <Field
                                            id="jobDescription"
                                            name="jobDescription"
                                            placeholder="Açıklama Giriniz"
                                            type='text'
                                        />
                                    </FormField>

                                    <Button content="Ekle"
                                        labelPosition="right"
                                        icon='add'
                                        positive
                                        type="submit"
                                        style={{ marginLeft: "20px" }} />
                                </Form>
                        )}
                    </Formik></Card.Content>
            </Card>
        </div>
    )
}
