import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import Employer from '../pages/users/Employer'
import Candidate from '../pages/users/Candidate'
import Categories from './Categories'
import JobPostings from '../pages/JobPostings'
import { Route } from 'react-router'


import AddResumes from '../pages/AddResumes'
import JobPostingDetails from '../pages/JobPostingDetails'
import Resumes from '../pages/Resumes'
import ResumeDetails from '../pages/ResumeDetails'
import CandidateDetails from '../pages/CandidateDetails'


export default function Dashboord() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    
                    <GridColumn width={12}>
                    <Route exact path='/' component={JobPostings}/>
                    <Route exact path='/employer' component={Employer}/>
                    <Route exact path='/candidate' component={Candidate}/>
                    <Route exact path='/jobposting' component={JobPostings}/>
                    <Route exact path='/addresumes' component={AddResumes}/>
                    <Route path='/jobposting/:id' component={JobPostingDetails}/>
                    <Route exact path='/candidate/:id' component={CandidateDetails}/>
                    {/* <Route exact path='/addresumes' component={AddResumes}/> */}
                    <Route exact path='/resumes' component={Resumes}/>
                    <Route  path='/resumes/:id' component={ResumeDetails}/>
                   
                    

                    </GridColumn>
                </Grid.Row>

            </Grid>

        </div>
    )
}
