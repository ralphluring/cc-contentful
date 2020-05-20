const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulDrop {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulShoProduct {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulVapePenProduct {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulFlowerProduct {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulPreRollProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const blogTemplate = path.resolve("./src/templates/blog/blog.js")
  const dropTemplate = path.resolve("./src/templates/drop/drop.js")

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulDrop.edges.forEach(edge => {
    createPage({
      component: dropTemplate,
      path: `/drops/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
