module.exports = {
  siteMetadata: {
    title:'Constellation',
    author:'Constellation Cannabis'
  },

  plugins:[
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `icewaterextract`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {resolve:'gatsby-source-contentful',
    options:{
      spaceId:process.env.CONTENTFUL_SPACE_ID,
      accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
    }
  },
    'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options:{
          name:'src',
          path:`${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name:'images',
        path:`${__dirname}/src/images`
    }
  },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:750,
              linkImagesToOriginal:false
            }
          }
        ]
      }
    }
  ]
}
