import React from 'react'
import Layout from '../components/layout'
import {Link, graphql,useStaticQuery} from 'gatsby'
import droppageStyles from './droppage.module.scss'
import Head from '../components/head'


const DropPage = (props) => {

    const data = useStaticQuery(graphql`
    
    query  {
        allContentfulRetailerStock(sort: {fields: updatedAt, order: DESC}) {
          edges {
            node {
                storeName
                slug
                updatedAt(fromNow: true)
            }   
          }
        }
      }

    `)
      
    return (
        <Layout>
            <Head title="Drops"/>
            <ol className={droppageStyles.posts}>
                {data.allContentfulRetailerStock.edges.map((edge)=> {
                    return (
                        <li className={droppageStyles.post}>
                            <Link to = {`/drops/${edge.node.slug}`}>
                                <h1>{edge.node.storeName}</h1>
                                <p>{edge.node.updatedAt}</p>
                               
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default DropPage;