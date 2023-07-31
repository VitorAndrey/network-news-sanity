const videonews = {
  title: 'Video News',
  name: 'videonews',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'string',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'file',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default videonews
