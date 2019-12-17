import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import '../styles/index.scss'

import Head from '../components/head'

export const query = graphql`
    query($slug:String!){
        contentfulDrop(slug: {eq: $slug}) {
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
      <Head title ={props.data.contentfulDrop.storeName}/>
      <h1 >{props.data.contentfulDrop.storeName}</h1>
      
      {documentToReactComponents(props.data.contentfulDrop.productsInStock.json)}
    </Layout>
  )

}

export default Drop;