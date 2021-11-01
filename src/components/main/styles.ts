import styled from 'styled-components'
import { styled as Styled } from '@material-ui/styles'
import DialogTitle from '@mui/material/DialogTitle'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = Styled(DialogTitle)({
  fontSize: '5rem'
})

export const Description = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`
