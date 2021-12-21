import { Meta, Story } from '@storybook/react'
import Testando from './index'

export default {
  title: 'Testando',
  component: Testando
} as Meta

export const Basic: Story = (args) => <Testando {...args} />
