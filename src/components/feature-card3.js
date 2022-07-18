import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className="feature-card3-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
      <span className="feature-card3-text2">{props.action}</span>
    </div>
  )
}

FeatureCard3.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'Lorem ipsum',
  rootClassName: '',
  action: 'SEE MORE',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_alt: 'image',
}

FeatureCard3.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard3
