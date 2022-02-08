import * as S from './styles'

export type HomePageProps = {
  title: string
  description: string
}
const HomePage = ({ title, description }: HomePageProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <br />
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default HomePage
