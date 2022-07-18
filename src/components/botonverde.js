import React from 'react'

import PropTypes from 'prop-types'

import './botonverde.css'

const Botonverde = (props) => {
  return (
    <div id="btn-test" className="boton verde-container">
      <button className="boton verde-button button">{props.button}</button>
    </div>
  )
}

Botonverde.defaultProps = {
  button: 'Quiero conocerlo',
}

Botonverde.propTypes = {
  button: PropTypes.string,
}

export default Botonverde
