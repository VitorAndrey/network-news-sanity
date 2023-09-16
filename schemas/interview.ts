const interview = {
  title: 'Entrevista',
  name: 'interview',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      description: 'Adicione  o título da entrevista',
    },
    {
      title: 'Imagem',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Adicione  uma imagem',
    },
    {
      title: 'Conteúdo',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Adicione um conteúdo sobre a notícia',
    },
    {
      title: 'Entrevistados',
      name: 'interviewees',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'interviewee'}]}],
      description: 'Crie ou selecione entrevistados',
    },
  ],
}

export default interview
