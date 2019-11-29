import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import dropStyles from './drops.module.scss'
import Dropmap from '../components/dropmap'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const Drops = () => {
   
    const data = useStaticQuery(graphql` 
        query {
            allContentfulRetailerStock {
                edges {
                    node {
                        updatedAt(fromNow: true)
                        storeName
                        storeLocation {
                            lat
                            lon
                        }
                        productsInStock {
                            json
                        }
                        storeLogo {
                            fixed(width: 100) {
                              src
                            }
                        }
                    }
                }
                totalCount
            }
        }

    `)

    const options = {
        
        renderNode:{
            "embedded-asset-block":(node) => {
                const url = node
                return <img alt="" src={url} className={dropStyles.logo}/>
            },
         
        }
    }


    return (
      <div className={dropStyles.container}>
<div className={dropStyles.header}><h1>{data.allContentfulRetailerStock.totalCount} Recent Drops</h1></div>
        
            <div className={dropStyles.drops}>
                {data.allContentfulRetailerStock.edges.map(edge => {
                    return (

                        <div className={dropStyles.drop}>
                            <div className={dropStyles.datenstore}>
                                <h3>{edge.node.updatedAt}</h3>
                                <h1>@</h1>

                                <div className={dropStyles.namelogo}>
                                {edge.node.storeLogo !== null ? 
                                    <img
                                        src={edge.node.storeLogo.fixed.src}
                                        alt="store logo"
                                        className={dropStyles.storelogo}
                                    />
                                    :
                                    <h4>{edge.node.storeName}</h4>
                                }
                             
                                    
                                </div>
                            </div>

                            {documentToReactComponents(edge.node.productsInStock.json,options)}
                        </div>

                    )
                })}
        </div>
        // Wrap the require in check for window
  {typeof window !== `undefined` ?  <Dropmap /> : null}}
         
      </div>
    )


}



export default Drops;