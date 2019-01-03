import React from 'react'
import { Link } from 'gatsby'

import Bio from '../components/Bio'
import Footer from '../components/Footer'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <React.Fragment>
          <h1
            style={{
              ...scale(1.0),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h1>
          <Bio />
        </React.Fragment>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateRows: 'min-content 1fr auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div>{header}</div>
        <div>{children}</div>
        <Footer renderBio={location.pathname !== rootPath} />
      </div>
    )
  }
}

export default Layout
