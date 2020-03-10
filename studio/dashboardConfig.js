export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e67a97a61af310096c09f16',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-927riquh',
                  apiId: 'ca2b7cbe-4c9a-48d3-839d-2718dafa4268'
                },
                {
                  buildHookId: '5e67a97a12cb83df2be42e05',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-isksvd2e',
                  apiId: '549feb70-d30a-4639-a5b8-5d55a0f71da1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thebasil88/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-isksvd2e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
