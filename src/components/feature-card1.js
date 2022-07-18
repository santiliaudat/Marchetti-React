import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className="feature-card1-feature-card">
      <h2 className="feature-card1-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
    </div>
  )
}

FeatureCard1.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'Lorem ipsum',
  image_alt: 'image',
}

FeatureCard1.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard1
