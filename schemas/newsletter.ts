const newsletter = {
  title: 'Newsletter',
  name: 'newsletter',
  type: 'document',
  fields: [
    {
      title: 'Capa',
      name: 'cover',
      type: 'reference',
      to: [{type: 'cover'}],
      description: 'Crie ou selecione a capa da newsletter',
    },
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      description: 'Adicione o mês ou a edição especial da newsletter',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      description: 'Clique em gerar',
    },
    {
      title: 'Introdução',
      name: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Adicione uma introdução para a newsletter',
    },
    {
      title: 'Notícias',
      name: 'news',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'news'}, {type: 'videonews'}]}],
      description: 'Crie ou selecione as notícias',
    },
    {
      title: 'Entrevista',
      name: 'interview',
      type: 'reference',
      to: [{type: 'interview'}],
      description: 'Adicione, se houver, a entrevista dessa edição',
    },
    {
      title: 'Rodapé',
      name: 'footer',
      type: 'reference',
      to: [{type: 'footer'}],
      description: 'Crie ou selecione o rodapé',
    },
  ],
}

export default newsletter
