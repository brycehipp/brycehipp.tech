import React from 'react'
import { Link } from 'gatsby'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    const { renderBio } = this.props

    return (
      <footer style={{ marginTop: rhythm(0.5), paddingTop: rhythm(1) }}>
        <p>{renderBio}</p>
        {renderBio ? (
          <div>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                marginTop: rhythm(0.25),
              }}
            >
              <Link
                style={{ boxShadow: 'none', textDecoration: 'none' }}
                to={'/'}
              >
                Today I Learned
              </Link>
            </h3>
            <Bio />
          </div>
        ) : (
          ''
        )}
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://twitter.com/brycehipp"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/brycehipp"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    )
  }
}

export default Footer
