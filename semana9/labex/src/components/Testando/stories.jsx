import Testando from '.'

export default {
  title: 'Testando',
  component: Testando,
}

export const Default = args => <Testando {...args} />
Default.args = {
  type: 'text',
  name: 'oloko bixo',
}
