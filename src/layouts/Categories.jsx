import React from 'react'
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


export default function Categories() {
  const history= useHistory()
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item onClick={()=>history.push('/employer')}>İş Verenler</Menu.Item>
        <Menu.Item onClick={()=>history.push('/candidate')}>İş Arayanlar</Menu.Item>
        <Menu.Item onClick={()=>history.push('/jobposting')}>İş İlanları</Menu.Item>
        <Menu.Item onClick={()=>history.push('/addresumes')}>İş İlanı Ekle</Menu.Item>
        <Menu.Item onClick={()=>history.push('/resumes')}>CV'ler</Menu.Item>  

        
      </Menu>
    </div>
  )
}
