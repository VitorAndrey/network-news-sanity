const interview = {
  title: 'Interview',
  name: 'interview',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
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
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Interviewees',
      name: 'interviewees',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'interviewee'}]}],
    },
  ],
}

export default interview
