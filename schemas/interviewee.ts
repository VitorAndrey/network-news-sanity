const interviewee = {
  title: 'Interviewee',
  name: 'interviewee',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Comment',
      name: 'comment',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default interviewee
