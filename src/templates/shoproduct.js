import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import shoproductStyles from "./shoproductStyles.module.scss"
import { useSpring, animated, config } from "react-spring"

export const query = graphql`
  query($slug: String!) {
    contentfulShoProduct(slug: { eq: $slug }) {
      id
      title
      slug
      description
      profile {
        thc
        scale
        terps
        terpprofile
      }
      coa {
        file {
          url
        }
      }
      picture {
        fluid {
          src
        }
      }
    }
  }
`

const Shoproduct = props => {
  const thc = useSpring({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " green",
    width: props.data.contentfulShoProduct.profile.thc + "%",
    from: { width: "0%" },
    config: { duration: 3000 },
  })
  const terps = useSpring({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " yellow",
    width: props.data.contentfulShoProduct.profile.terps * 10 + "%",
    from: { width: "0%" },
    config: { duration: 4000 },
  })

  let pdf
  props.data.contentfulShoProduct.coa
    ? (pdf = props.data.contentfulShoProduct.coa.file.url)
    : (pdf = null)
  return (
    <Layout>
      <Head title={props.data.contentfulShoProduct.title} />
      <h1>{props.data.contentfulShoProduct.title} - SHO</h1>

      <div className={shoproductStyles.container}>
        <div className={shoproductStyles.image}>
          <img
            src={props.data.contentfulShoProduct.picture.fluid.src}
            alt="product iamge"
          />
        </div>

        <div className={shoproductStyles.description}>
          <div className={shoproductStyles.thc}>
            <p>THC </p>
            <animated.div style={thc}>
              {props.data.contentfulShoProduct.profile.thc}%
            </animated.div>
          </div>
          <div className={shoproductStyles.terps}>
            <p>Terps</p>
            <animated.div style={terps}>
              {props.data.contentfulShoProduct.profile.terps}%
            </animated.div>
          </div>

          <ul>
            {props.data.contentfulShoProduct.profile.terpprofile.map(terp => {
              return <li>{terp}<img></img></li>
            })}
          </ul>
          <p>{props.data.contentfulShoProduct.description}</p>

          <a href={pdf} target="_blank" rel="noopener noreferrer">
            See Test results
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Shoproduct
