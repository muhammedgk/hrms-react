import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'



export default function Navi() {
    return (
        <div>
            <Menu size='large'>
                <Menu.Item
                    name='HRMS'
                />
                {/* //<Menu.Item name='messages'/> */}

                <Menu.Menu position='right'>
                    <Dropdown item text='Kayıt Ol'>
                        <Dropdown.Menu>
                            <Dropdown.Item>İş Arayan</Dropdown.Item>
                            <Dropdown.Item>İş Veren</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Giriş Yap</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
