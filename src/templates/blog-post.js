import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { formatReadingTime } from '../utils/helpers'
import { rhythm, scale } from '../utils/typography'

const GITHUB_USERNAME = 'brycehipp'
const GITHUB_REPO_NAME = 'brycehipp.tech'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postData = post.frontmatter
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next, slug } = this.props.pageContext
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/blob/master/src/pages/${slug.replace(
      /\//g,
      ''
    )}.md`
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={postData.title}
          description={postData.spoiler}
          slug={post.fields.slug}
        />
        <h1>{postData.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {postData.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
          {postData.tags ? (
            <div>
              <small className="tags">
                {postData.tags
                  .split(',')
                  .filter(tag => tag.trim())
                  .map(tag => (
                    <span className="tag">{tag}</span>
                  ))}
              </small>
            </div>
          ) : (
            ''
          )}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        tags
      }
      fields {
        slug
      }
    }
  }
`
