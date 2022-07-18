import React from 'react'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className={`menu-navbar ${props.rootClassName} `}>
      <div className="menu-left-side">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="menu-image"
        />
        <div className="menu-burger-menu">
          <svg viewBox="0 0 1024 1024" className="menu-icon">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="menu-links-container">
        <a href={props.link_home} className="menu-link anchor">
          HOME
        </a>
        <a href={props.link_conoceme} className="menu-link1 anchor">
          CONOCEME
        </a>
        <a
          href="https://www.marchettirules.com/marchettirules.php"
          className="menu-link2 anchor"
        >
          MARCHETTIRULES
        </a>
        <a
          href="https://www.marchettirules.com/tienda.php"
          className="menu-link3 anchor"
        >
          TIENDA
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5491162430189"
          className="menu-link4 anchor"
        >
          RESERVA TURNO
        </a>
        <a
          href="https://www.marchettirules.com/contacto.php"
          className="menu-link5 anchor"
        >
          <span className="menu-text">CONTACTO</span>
        </a>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  link_conoceme: 'https://www.marchettirules.com/conoceme.php',
  rootClassName: '',
  image_src: '/playground_assets/iconos%20landing%20comunidad-200h.png',
  link_home: 'https://www.marchettirules.com',
  image_alt: 'image',
}

Menu.propTypes = {
  link_conoceme: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  link_home: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Menu
