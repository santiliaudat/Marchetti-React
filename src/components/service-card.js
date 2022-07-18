import React from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className="service-card-service-card">
      <div className="service-card-image">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="service-card-image1"
        />
      </div>
      <h3 className="service-card-text card-Heading">{props.title}</h3>
      <span className="service-card-text1">{props.description}</span>
      <a
        href={props.btn_link}
        target="_blank"
        rel="noreferrer noopener"
        className="service-card-link anchor"
      >
        {props.btn_text}
      </a>
    </div>
  )
}

ServiceCard.defaultProps = {
  btn_link: 'https://marchettirules.com',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
  title: 'SER',
  btn_text: 'Saber más',
  description:
    'Si quieres ser feliz y sentirte bien con tu cuerpo, acuérdate que no hay 2 como tú.',
}

ServiceCard.propTypes = {
  btn_link: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  btn_text: PropTypes.string,
  description: PropTypes.string,
}

export default ServiceCard
