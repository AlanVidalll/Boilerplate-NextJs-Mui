import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Main from './index'

const mockProps = {
  title: 'Bem vindo!',
  description: 'Aqui é onde a mágica começa.'
}

describe('<Main>', () => {
  it('Should render the heading ', () => {
    renderWithTheme(<Main {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: /Bem vindo!/i })
    ).toBeInTheDocument()
  })
})

it('should rende the colors corrects', () => {
  const { container } = renderWithTheme(<Main {...mockProps} />)

  expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
})
