import React from 'react'
import { Button, Dropdown, Menu, Icon, Container } from 'semantic-ui-react'
import { useHistory } from 'react-router'



export default function Navi() {
    const history = useHistory();
    return (
        <div>
            
            <Menu size='large' >
                <Container>
                    <Icon name='handshake outline' size='huge' color='violet' />
                    <Menu.Item onClick={() => history.push('/')}

                        name='HRMS'
                    />
                    <Menu.Menu position="right">
                        <Dropdown item text='Kayıt Ol' >
                            <Dropdown.Menu>
                                <Dropdown.Item>İş Arayan</Dropdown.Item>
                                <Dropdown.Item>İş Veren</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item >
                            <Button primary >Giriş Yap</Button>
                        </Menu.Item>
                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}
