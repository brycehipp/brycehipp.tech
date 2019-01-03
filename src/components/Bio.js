import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(0.5) }}>
        <img
          src={profilePic}
          alt={'Bryce Hipp'}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          What I've learned and discovered.
          <br /> A blog by{' '}
          <a href="https://twitter.com/brycehipp">Bryce Hipp</a>.
        </p>
      </div>
    )
  }
}

export default Bio
