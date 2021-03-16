import styled from 'styled-components'

const BaseInput = styled.input`
  font-size: 1rem;
  border-bottom: 3px tomato solid;
  width: 50%;
  height: 3rem;
`

const TextField = styled(BaseInput)`
`

const NumberField = styled.input` //see set attribute
  font-size: 1rem;
  background-color: white;
`

const SelectField = styled.input`
  font-size: 1rem;
  background-color: white;
`
const CheckField = styled.input`
  font-size: 1rem;
  background-color: white;
`
const RadioField = styled.input`
  font-size: 1rem;
  background-color: white;
`

export { TextField, NumberField, SelectField, CheckField, RadioField }