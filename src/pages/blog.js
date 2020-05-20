import React from "react"
import Layout from "../components/layout/index"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            author {
              name
            }
            slug
            title
            publishDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h1>{edge.node.title}</h1>
              </Link>
              <p>{edge.node.publishDate}</p>
              <p> by {edge.node.author.name}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
