import { useState, useEffect } from 'react'
import * as api from 'utils/api'
import { PrimaryButton, SecondaryButton, DeleteButton, EditButton }
  from 'styles/Buttons'
import { Wraper, ListContainer, SecondListContainer } from 'styles/Containers'
import { ListItem } from 'styles/Lists'
import { Title } from 'styles/Texts'
import { EditBox } from 'components/EditBox'
import Pagination from '@material-ui/lab/Pagination'

export const ListUsers = ({users, add}) => {

  const [userList, setUserList] = useState([])
  const [edit, setEdit] = useState({ status: false, id: ''})
  const [msg, setMsg] = useState('Carregando...')
  const [page, setPage] = useState(1)
  
  const getUsers = () => api.getAll().then(r => {
    !r.length && setMsg('Nenhum usuario...')
    r && setUserList(r)
  })
  
  const editUser = id => {
    setEdit({ status: true, id})
  }
  
  const delUser = id => api.deleteUser(id).then(r => {
    !r && alert('Deletadu!')
    getUsers()
  })
  
  useEffect(() => getUsers(), [edit.status])
  
  const maxItemsPerPage = window.screen.width > 500 ? 7 : 4
  let filteredList = []
  
  console.warn(8 * 0)
  
  if (userList.length > 8) {
    filteredList = userList.filter((user, index) =>
    (index <= maxItemsPerPage * page) && (index >= maxItemsPerPage * (page - 1)))
  }
  
  console.log(filteredList)
  
  const list = filteredList.map(user => (
      <ListItem key={user.id}>
        <strong>{user.name}</strong>
        <EditButton onClick={() => editUser(user.id)}>
          {window.screen.width > 500 ? 'Editar' : ''}
        </EditButton>
        <DeleteButton onClick={() => delUser(user.id)}>
          {window.screen.width > 500 ? 'Excluir' : ''}
        </DeleteButton>
      </ListItem>
    ))

  const loading = <Title>{msg}</Title>
  let listItems = userList.length ? list : loading
  
  
  console.log(`quantidade: ${userList.length}`)
  console.log({listItems})

  
  const editBox = edit.status && <EditBox id={edit.id} back={setEdit}/>

  return <Wraper>
      {editBox}
      <Title>Edita ai os dados</Title>
      <ListContainer>
        <SecondListContainer>
          {listItems}
        </SecondListContainer>
      <Pagination count={userList.length / 8} shape='rounded' 
        onChange={(e, value) => setPage(value)}
      />
      </ListContainer>
      <PrimaryButton onClick={add}>
        Adicionar Usuarios
      </PrimaryButton>
    </Wraper>
}