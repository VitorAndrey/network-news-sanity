const cover = {
  title: 'Cover',
  name: 'cover',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default cover
