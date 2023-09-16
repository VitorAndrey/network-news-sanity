const cover = {
  title: 'Capa',
  name: 'cover',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      description: 'Adicione um nome para capa',
    },
    {
      title: 'Imagem da Capa',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Adicione uma imagem de capa',
    },
  ],
}

export default cover
