const news = {
  title: 'Notícias',
  name: 'news',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      description: 'Adicione o título da matéria',
    },
    {
      title: 'Tema',
      name: 'theme',
      type: 'string',
      description: 'Defina em uma palavra o tema da notícia',
    },
    {
      title: 'Imagem',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Insira uma imagem sobre a matéria',
    },
    {
      title: 'Conteúdo',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Escreva o conteúdo da notícia',
    },
  ],
}

export default news
