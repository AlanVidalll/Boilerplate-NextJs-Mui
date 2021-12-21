import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Main from './index'

describe('<Main>', () => {
  it('Should render the heading ', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /Buttons exemplos/i })
    ).toBeInTheDocument()
  })
})

it('should rende the colors corrects', () => {
  const { container } = renderWithTheme(<Main />)

  expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
})
