import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogrollStyles from "./blogroll.module.scss"

const Blogroll = () => {
  const data = useStaticQuery(graphql`
    query {
      blog: allContentfulBlogPost(
        sort: { fields: publishDate, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            id
            title
            publishDate(formatString: "MMMM DD YYYY")
            slug
            author {
              name
            }
            body {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <div className={blogrollStyles.container}>
      <div className={blogrollStyles.blogrollheader}>
        <h4>Recent Blog Posts</h4>
      </div>
      <ol className={blogrollStyles.posts}>
        {data.blog.edges.map(edge => {
          return (
            <li className={blogrollStyles.post} key={edge.node.id}>
              <div>
                <Link
                  className={blogrollStyles.posttitle}
                  to={`/blog/${edge.node.slug}`}
                >
                  {edge.node.title}
                </Link>
                <div className={blogrollStyles.dateauthor}>
                  <p>{edge.node.publishDate}</p>
                  {edge.node.author.name ? (
                    <p>by {edge.node.author.name}</p>
                  ) : (
                    <> </>
                  )}
                </div>

                <p>{edge.node.body.json.content[0].content[0].value}</p>

                <Link to={`/blog/${edge.node.slug}`}>read full post</Link>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Blogroll
