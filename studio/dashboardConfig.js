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
                  buildHookId: '60e6e50737119ae86fe9d275',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d4wmtmag',
                  apiId: 'cc602d5e-ce82-44fd-8db5-05b588574a38'
                },
                {
                  buildHookId: '60e6e50770882cfb94c2d864',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rs1vpdvc',
                  apiId: 'f70391a8-0657-4d6a-8c6e-74c15526480c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cezaryzysk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rs1vpdvc.netlify.app', category: 'apps'}
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
