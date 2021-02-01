export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6018691f9bf1bf00ad6a8714',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3hziyw3p',
                  apiId: 'b73f57dd-a9df-4bc6-8d1a-3826bc006bcf'
                },
                {
                  buildHookId: '6018691f4e092d0e1700363d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u28fkz2o',
                  apiId: '5b2710b5-9452-46cd-ac71-1f65f7289e27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katzielinska/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u28fkz2o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
