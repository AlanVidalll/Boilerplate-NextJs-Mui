import { renderWithTheme } from 'utils/tests/helpers'

import Home from './index'

describe('<Home />', () => {
  it('shold render the heading', () => {
    renderWithTheme(
      <Home
        title={'Bem vindo!'}
        description={'Aqui é onde a mágica acontece!'}
      />
    )
  })
})
