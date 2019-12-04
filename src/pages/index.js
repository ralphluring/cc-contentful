import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'
import Drops from '../components/drops'


const IndexPage = (props) => {
   
    const data = useStaticQuery(graphql` 
    query {
        blog: allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, limit: 3) {
          edges {
            node {
              title
              publishDate(formatString: "MMM-DD-YYYY")
              slug
              author {
                name
              }
              body {
                json
              }
            }
          }
        }
      }

    `)

    return(
        <Layout>
            <Head title="Home" />
            <Drops />
            <div className={blogStyles.blogrollheader}> 
                <h4 >Recent Blog Posts</h4>
            </div>
            <ol className={blogStyles.posts}>
                {data.blog.edges.map((edge)=> {
                    return (
                        
                        <li className={blogStyles.post}>

                            <div  >
                                <Link  className={blogStyles.posttitle} to ={`/blog/${edge.node.slug}`}>
                                {edge.node.title}
                                </Link>
                                <div className={blogStyles.dateauthor}>
                                <p>{edge.node.publishDate}</p>
                                <p>by {edge.node.author.name}</p>
                                </div>
                                
                                
                                <p>{edge.node.body.json.content[0].content[0].value}</p>   

                                <Link to ={`/blog/${edge.node.slug}`}>
                                read full post
                                </Link>            
                            </div>

                        </li>
                        
                    )
                })}
            </ol>
        </Layout>

    )
}

export default IndexPage;