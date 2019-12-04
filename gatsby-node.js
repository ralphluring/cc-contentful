const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    //get path to template
 
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            },
            allContentfulRetailerStock{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const dropTemplate = path.resolve('./src/templates/drop.js')
 
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component:blogTemplate,
            path:`/blog/${edge.node.slug}`,
            context:{
                slug: edge.node.slug
            }
        })
    })  

    res.data.allContentfulRetailerStock.edges.forEach((edge) => {
        createPage({
            component:dropTemplate,
            path:`/drops/${edge.node.slug}`,
            context:{
                slug: edge.node.slug
            }
        })
    }) 

    
}
