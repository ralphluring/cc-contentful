import React, { Fragment, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import imageGalleryStyles from "./imagegallery.module.scss"
import { FaCaretRight } from "react-icons/fa"

const ImageGallery = () => {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      allContentfulImagegallery {
        edges {
          node {
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const length = data.allContentfulImagegallery.edges[0].node.images.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  return (
    <Fragment>
      {data.allContentfulImagegallery.edges.map(edge => {
        return (
          <div className={imageGalleryStyles.container}>
            <img
              className={imageGalleryStyles.pic}
              src={edge.node.images[index].fluid.src}
            ></img>
            <FaCaretRight
              onClick={() => handleNext()}
              className={imageGalleryStyles.next}
            />
          </div>
        )
      })}
    </Fragment>
  )
}

export default ImageGallery
