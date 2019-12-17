const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //get path to template

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
      allContentfulProductType {
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
    }
  `)
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const dropTemplate = path.resolve("./src/templates/drop.js")
  const productTypeTemplate = path.resolve("./src/templates/productType.js")
  const shoproduct = path.resolve("./src/templates/shoproduct.js")

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
  res.data.allContentfulProductType.edges.forEach(edge => {
    createPage({
      component: productTypeTemplate,
      path: `/products/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulShoProduct.edges.forEach(edge => {
    createPage({
      component: shoproduct,
      path: `/products/solventless/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
