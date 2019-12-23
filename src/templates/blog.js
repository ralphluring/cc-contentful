import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import { Disqus } from "gatsby-plugin-disqus"
import blogpageStyles from "./blogpostStyles.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do YYYY")
      author {
        name
      }
      body {
        json
      }
    }
  }
`
const Blog = props => {
  let disqusConfig = {
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title,
  }

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={blogpageStyles.postimg} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogpageStyles.container}>
        <div className={blogpageStyles.header}>
          <h1 className={blogpageStyles.blogtitle}>
            {props.data.contentfulBlogPost.title}
          </h1>
          <p className={blogpageStyles.blogdate}>
            {props.data.contentfulBlogPost.publishDate}
          </p>
          <p className={blogpageStyles.blogauthor}>
            by {props.data.contentfulBlogPost.author.name}
          </p>
        </div>
        <div className={blogpageStyles.blogcontent}>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
      </div>
      <Disqus config={disqusConfig} className={blogpageStyles.disqus} />
    </Layout>
  )
}

export default Blog
