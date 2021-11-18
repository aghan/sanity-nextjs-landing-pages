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
                  buildHookId: '6196438001074331dbd39d08',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cef4qt68',
                  apiId: 'c6111895-c5e3-46e1-bd0d-0495cac08729'
                },
                {
                  buildHookId: '61964380c3dff40a8468b152',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ws4th15x',
                  apiId: '5b9028b1-1b45-451c-ba5d-edbfde078501'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aghan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ws4th15x.netlify.app', category: 'apps'}
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
