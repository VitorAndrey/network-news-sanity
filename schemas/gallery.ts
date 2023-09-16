const gallery = {
  title: 'Galeria',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'O título da galeria',
    },
    {
      name: 'media',
      title: 'Mídia',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Imagem',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'file',
          title: 'Vídeo',
        },
      ],
      description: 'Adicione imagens ou vídeos à galeria',
    },
  ],
}

export default gallery
