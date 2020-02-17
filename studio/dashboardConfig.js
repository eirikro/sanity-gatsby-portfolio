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
                  buildHookId: '5e4a7c42a48184db8589abff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yyqscrt7',
                  apiId: 'd8b2d8ac-6646-4967-8229-2c746bb139d8'
                },
                {
                  buildHookId: '5e4a7c43d9635941a42aab76',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3jsmbyw8',
                  apiId: '020863cf-0419-4d9c-8d9a-034686a39d40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eirikro/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3jsmbyw8.netlify.com',
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
