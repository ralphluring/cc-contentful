import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import textlogosStyles from './textlogo.module.scss'

const Textlogo = () => {

    const data = useStaticQuery(graphql`

    query {
        file(relativePath: { eq: "images/cc_logo_mobile-02.png" }) {
            childImageSharp {
                fixed(width:150) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }

    `)

    return (
    
        <div className={textlogosStyles.container}>
            <Img
                className={textlogosStyles.logo}
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
            /> 
        </div>
   
    )
}

export default Textlogo;