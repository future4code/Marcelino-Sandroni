import { useInput } from 'utils/useInput'
import { useState, useEffect } from 'react'
import * as api from 'utils/api'
import { PrimaryButton, DeleteButton, EditButton }
  from 'styles/Buttons'
import { Wraper, ListContainer, SecondListContainer } from 'styles/Containers'
import { ListItem } from 'styles/Lists'
import { Title } from 'styles/Texts'
import { EditBox } from 'components/EditBox'
import { InputSearch } from 'styles/Inputs'
import Pagination from '@material-ui/lab/Pagination'
import { SuccessAlert, ErrorAlert } from 'styles/Alert'

export const ListUsers = ({users, add}) => {

  const [input, setInput, controlInput] = useInput({search: ''})
  const [userList, setUserList] = useState([])
  const [edit, setEdit] = useState({ status: false, id: ''})
  const [msg, setMsg] = useState('Carregando...')
  const [page, setPage] = useState(1)
  const [filteredList, setFilteredList] = useState([])
  
  const getUsers = () => api.getAll().then(r => {
    r && setUserList([...r])
    !r && setMsg('Nenhum usuario...')
  })
  
  const editUser = id => {
    setEdit({ status: true, id})
  }
  
  const delUser = id => api.deleteUser(id).then(r => {
    !r && alert('Deletadu!')
    getUsers()
  })

  const searchUsers = () => {
    const regex = new RegExp(input.search, 'i')
    setFilteredList([... userList.filter(user => regex.test(user.name))])
    console.log(regex)
    console.log(filteredList)
  }

  
  useEffect(() => getUsers(), [edit.status])

  useEffect(() => {
    if (userList.length) {
      setFilteredList([...userList])
      setMsg('Nenhum resultado para a procura...')
    } else {
    }
  }, [userList])
  
  useEffect(() => {
    input.search ? searchUsers() : setFilteredList([...userList])
  }, [input.search])
  
  const maxItemsPerPage = window.screen.width > 500 ? 7 : 4
  let itemsInPage = []
  
  if (filteredList.length && filteredList.length > maxItemsPerPage) {
    console.log(`ENTROU!`)
    itemsInPage = filteredList.filter((user, index) =>
        (index <= maxItemsPerPage * page) &&
        (index >= maxItemsPerPage * (page - 1))
      )
  } else {
    itemsInPage = [...filteredList]
  } 
  console.log(`filter: ${filteredList.length}`)
  console.log(`item: ${itemsInPage.length}`)
  console.log(`page: ${page} max: ${maxItemsPerPage}`)

  const list = itemsInPage.length && itemsInPage.map(user => (
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
  let listItems = itemsInPage.length ? list : loading
  
  const editBox = edit.status && <EditBox id={edit.id} back={setEdit}/>

  return <Wraper>
      {editBox}
      <Title>Edita ai os dados</Title>
      <InputSearch name='search' value={input.search} onChange={controlInput} />
      <ListContainer>
        <SecondListContainer>
          {listItems}
        </SecondListContainer>
      <Pagination count={Math.ceil(filteredList.length / maxItemsPerPage)} shape='rounded' 
        onChange={(e, value) => setPage(value)}
      />
      </ListContainer>
      <PrimaryButton onClick={add}>
        Adicionar Usuarios
      </PrimaryButton>
    </Wraper>
}