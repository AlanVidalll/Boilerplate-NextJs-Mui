import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
}

export const Default: Story<MainProps> = (args) => <Main {...args} />
Default.args = {
  title: 'Bem vindo!',
  description: 'Aqui é onde a mágica começa.'
}
