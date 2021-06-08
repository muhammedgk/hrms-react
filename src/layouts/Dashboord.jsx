import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import Employer from '../pages/users/Employer'
import Candidate from '../pages/users/Candidate'
import Categories from './Categories'
import JobPostings from '../pages/JobPostings'


export default function Dashboord() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    
                    <GridColumn width={12}>
                        <Employer />
                        <Container className="main">
                            <Candidate />
                        </Container>
                        <Container className="main">
                        <JobPostings/>
                        </Container>
                        

                    </GridColumn>
                </Grid.Row>

            </Grid>

        </div>
    )
}
