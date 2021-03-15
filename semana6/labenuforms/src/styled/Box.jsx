import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  min-width: 350px;
  max-width: ${props => props.max}px;
  margin: 0 auto;
`

export const FlexBox = styled.div`
  display: flex;
  background-color: white;
  ${({size}) => size && `width: ${size}; height: ${size}`};
  ${({w}) => `width: ${typeof w === 'string' && `${w}px` || w && `${w}%`}`};
  ${({h}) => `height: ${typeof h === 'string' && `${h}px` || h && `${h}%`}`};
  ${props => props.row && 'flex-direction: row'};
  ${props => props.column && 'flex-direction: column'};
  ${props => props.wrap && 'flex-wrap: wrap'};
  ${props => props.nowrap && 'flex-wrap: nowrap'};
  ${props => props.justify && `justify-content: ${props.justify}`};
  ${props => props.align && `align-items: ${props.align}`};
`