import React from 'react'

import PropTypes from 'prop-types'

import './boton-verde.css'

const BotonVerde = (props) => {
  return (
    <div id="btn-test" className="boton-verde-container">
      <button className="boton-verde-button button">{props.button}</button>
    </div>
  )
}

BotonVerde.defaultProps = {
  button: 'Quiero conocerlo',
}

BotonVerde.propTypes = {
  button: PropTypes.string,
}

export default BotonVerde
