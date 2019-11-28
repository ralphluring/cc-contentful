import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import '../styles/index.scss'
import LayoutStyles from '../components/layout.module.scss'
import Head from '../components/head'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

export const query = graphql`
query($slug:String!){
  contentfulBlogPost(slug:{eq:$slug}){
      id
      title
      publishDate(formatString:"MMMM Do YYYY")
      author{
        name
      }
      body{
        json
      }
    }
  }
`
const Blog = (props) => {

  let disqusConfig = {

    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title,
  }

  const options = {
    renderNode:{
      "embedded-asset-block":(node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}  className={LayoutStyles.postimg}/>
      }
    }
  }

  return (
    <Layout>
      <Head title ={props.data.contentfulBlogPost.title}/>
      <h1 className={LayoutStyles.blogtitle}>{props.data.contentfulBlogPost.title}</h1>
      <p className={LayoutStyles.blogdate}>{props.data.contentfulBlogPost.publishDate}</p>
      <p className={LayoutStyles.blogauthor}>by {props.data.contentfulBlogPost.author.name}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

      <Disqus config={disqusConfig} />
    </Layout>
  )

}

export default Blog;