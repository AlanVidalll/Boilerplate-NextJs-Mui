import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Testando from './index'

describe('<Testando />', () => {
  it('shold render the heading', () => {
    const { debug } = renderWithTheme(<Testando />)
    expect(screen.getByText(/Testando/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Testando/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Outlined/i })
    ).toBeInTheDocument()
    debug()
  })
})
