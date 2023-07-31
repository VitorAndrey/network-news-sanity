const newsletter = {
  title: 'Newsletter',
  name: 'newsletter',
  type: 'document',
  fields: [
    {
      title: 'Cover',
      name: 'cover',
      type: 'reference',
      to: [{type: 'cover'}],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Introduction',
      name: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'News',
      name: 'news',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'news'}, {type: 'videonews'}]}],
    },
    {
      title: 'Interview',
      name: 'interview',
      type: 'reference',
      to: [{type: 'interview'}],
    },
    {
      title: 'Footer',
      name: 'footer',
      type: 'reference',
      to: [{type: 'footer'}],
    },
  ],
}

export default newsletter
