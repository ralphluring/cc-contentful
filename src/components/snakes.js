import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import snakeStyles from './snakes.module.scss'

const Snakes = () => {

    const data = useStaticQuery(graphql`

    query {
        file(relativePath: { eq: "images/cc_logo_mobile-01.png" }) {
            childImageSharp {
                fixed(width:150) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }

    `)

    return (
    
        <div className={snakeStyles.container}>
            <Link to="/">
            <Img
                className={snakeStyles.logo}
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
            /> 
            </Link>
        </div>
   
    )
}

export default Snakes;