const interviewee = {
  title: 'Estrevistados',
  name: 'interviewee',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'name',
      type: 'string',
      description: 'Adicione o nome do entrevistado',
    },
    {
      title: 'Imagem',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Adicione uma foto da entrevista',
    },
    {
      title: 'Comentário',
      name: 'comment',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Comentário do entrevistado',
    },
  ],
}

export default interviewee
