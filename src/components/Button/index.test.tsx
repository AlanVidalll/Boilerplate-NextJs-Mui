import { render } from '@testing-library/react'

import Button from './index'

describe('<Button />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Button />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
