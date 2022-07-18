import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Botonverde from '../components/botonverde'
import './libro.css'

const Libro = (props) => {
  return (
    <div className="libro-container">
      <Helmet>
        <title>Libro</title>
        <meta name="description" content="Marchetti" />
        <meta property="og:title" content="Libro" />
        <meta property="og:description" content="Marchetti" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cddaa0fe-329b-4980-ac51-175c84c5aca3/4e8ea9c2-19aa-4f93-a94f-0a54c9bae130?org_if_sml=1"
        />
      </Helmet>
      <Menu></Menu>
      <a href="#download" className="libro-link">
        <div className="libro-hero"></div>
      </a>
      <div className="libro-services">
        <div className="libro-container1">
          <div className="libro-heading-container">
            <div className="libro-container2">
              <h1 className="libro-heading">
                ¿Qué son las
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="libro-text">#MarchettiRules®</span>
              <h1 className="libro-heading1">?</h1>
            </div>
          </div>
        </div>
        <span className="libro-text01 section-Text">
          <span className="libro-text02">
            ¡Es hora que replanteemos nuestro paradigma!
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>​</span>
          <span className="libro-text07">
            Nuestro ser, alma y espíritu no fueron diseñados para sufrir. 
          </span>
          <br></br>
          <span></span>
          <span className="libro-text10">
            Somos seres que buscan placer. Estamos acostumbrados a esperar tener
            algo para sentirnos felices, “realizados”.
          </span>
          <span></span>
        </span>
        <span className="libro-text12 section-Text">
          <span className="libro-text13"></span>
          <br></br>
          <span className="libro-text14">
            Te planteo este nuevo paradigma que cambia esta visión:
          </span>
          <span></span>
        </span>
      </div>
      <form className="libro-form">
        <div className="libro-container3">
          <div className="libro-container4">
            <input
              type="text"
              name="name"
              required="true"
              placeholder="Nombre y apellido"
              autoComplete="off"
              className="libro-textinput input"
            />
          </div>
          <Botonverde></Botonverde>
        </div>
      </form>
    </div>
  )
}

export default Libro
