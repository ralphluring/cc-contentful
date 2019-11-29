import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Head = ({title}) => {

    const data  = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    return(
    <>
        <Helmet title = {`${title} | ${data.site.siteMetadata.title}`}/>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400&display=swap" rel="stylesheet"/>

        </Helmet> 
      
        
    </>
    )   
}

export default Head