const videonews = {
  title: 'Notícias com Vídeo',
  name: 'videonews',
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
      title: 'Vídeo',
      name: 'video',
      type: 'file',
      description: 'Insira um video sobre a matéria',
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

export default videonews
