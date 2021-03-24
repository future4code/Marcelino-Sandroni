import { useState, useEffect } from 'react'
import * as api from 'utils/api'
import { PrimaryButton, SecondaryButton, DeleteButton, EditButton }
  from 'styles/Buttons'
import { Wraper, ListContainer } from 'styles/Containers'
import { ListItem } from 'styles/Lists'
import { Title } from 'styles/Texts'
import { EditBox } from 'components/EditBox'

export const ListUsers = ({users, add}) => {

  const [userList, setUserList] = useState([])
  const [edit, setEdit] = useState({ status: false, id: ''})
  const [msg, setMsg] = useState('Carregando...')
  
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
  
  const list= userList.map(user => (
      <ListItem key={user.id}>
        <strong>{user.name}</strong>
        <EditButton onClick={() => editUser(user.id)}>Editar</EditButton>
        <DeleteButton onClick={() => delUser(user.id)}>Excluir</DeleteButton>
      </ListItem>
    ))
  const loading = <Title>{msg}</Title>
  const listItems = userList.length ? list : loading
  
  const editBox = edit.status && <EditBox id={edit.id} back={setEdit}/>

  return <Wraper>
      {editBox}
      <Title>Edita ai se quiser Parcero</Title>
      <ListContainer>{listItems}</ListContainer>
      <PrimaryButton onClick={add}>
        Adicionar Usuarios
      </PrimaryButton>
    </Wraper>
}