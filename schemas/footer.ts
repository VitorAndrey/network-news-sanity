const footer = {
  title: 'Rodapé',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      description: 'Adicione um título para seu rodapé',
    },
    {
      title: 'Conteúdo',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Adicione o conteudo do rodapé',
    },
  ],
}

export default footer
