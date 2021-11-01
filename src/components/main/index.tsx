import Button from 'components/Button'
import * as S from './styles'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

const Main = ({
  title = 'Buttons exemplos',
  description = 'Componente de Button de exemplo com varios estados para estudo'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <br />
    <S.Description>{description}</S.Description>
    <br />
    <Button fullWidth size="large">
      Buy now
    </Button>
    <br />
    <Button size="large">Buy now</Button>
    <br />
    <Button size="large" icon={<AddShoppingCart />}>
      Buy now
    </Button>
    <br />
    <Button>Buy now</Button>
    <br />
    <Button size="small">Buy now</Button>
    <br />
    <Button as="a" href="/link">
      Buy now
    </Button>
  </S.Wrapper>
)

export default Main
