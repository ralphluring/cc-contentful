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

  const blogTemplate = path.resolve("./src/templates/blog.js")
  const dropTemplate = path.resolve("./src/templates/drop.js")
  const shoproduct = path.resolve("./src/templates/shoproduct.js")
  const vapeproduct = path.resolve("./src/templates/vapeproduct.js")
  const flowerproduct = path.resolve("./src/templates/flowerproduct.js")
  const prerollproduct = path.resolve("./src/templates/preRollproduct.js")

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulPreRollProduct.edges.forEach(edge => {
    createPage({
      component: prerollproduct,
      path: `/prerolls/${edge.node.slug}`,
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

  res.data.allContentfulVapePenProduct.edges.forEach(edge => {
    createPage({
      component: vapeproduct,
      path: `/solventless/carts/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulShoProduct.edges.forEach(edge => {
    createPage({
      component: shoproduct,
      path: `/solventless/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulFlowerProduct.edges.forEach(edge => {
    createPage({
      component: flowerproduct,
      path: `/flower/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
