import styled from 'styled-components'

const Button = styled.button`
  background-color: #01273F;
  color: #fff;
  padding: 1rem;
  border: none;
  cursor: pointer;
  width: ${props => props.width}
`

export default Button;