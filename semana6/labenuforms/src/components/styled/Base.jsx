import styled from 'styled-components'

const setStyle = (prop, style) =>
  prop && `${style}: ${ 
    (typeof prop === 'string' && `${prop}px`) || 
    (prop && `${prop}%`) };`

const myStyle = templateString => styled(Base)`${templateString}`

const Base = styled.div`
  ${prop => setStyle(prop.w, 'width')}
  ${prop => setStyle(prop.wmin, 'min-width')}
  ${prop => setStyle(prop.wmax,'max-width')}
`

const Testando = myStyle`
  background-color: tomato;
`

export default Testando