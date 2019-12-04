import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import '../styles/index.scss'
import LayoutStyles from '../components/layout.module.scss'
import Head from '../components/head'

export const query = graphql`
    query($slug:String!){
        contentfulRetailerStock(slug: {eq: $slug}) {
            updatedAt
            slug
            storeName
            productsInStock {
            json
            }
        }
    }
`
const Drop = (props) => {

  return (
    <Layout>
      <Head title ={props.data.contentfulRetailerStock.storeName}/>
      <h1 >{props.data.contentfulRetailerStock.storeName}</h1>
      
      {documentToReactComponents(props.data.contentfulRetailerStock.productsInStock.json)}
    </Layout>
  )

}

export default Drop;