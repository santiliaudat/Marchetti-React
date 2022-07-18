import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import InviernoEnfocado from './views/invierno-enfocado'
import BsquedaMR from './views/bsqueda-m-r'
import Consultas from './views/consultas'
import Libro from './views/libro'
import ComunidadEnfocads from './views/comunidad-enfocads'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={InviernoEnfocado} path="/invierno-enfocado" />
        <Route exact component={BsquedaMR} path="/bsqueda-m-r" />
        <Route exact component={Consultas} path="/consultas" />
        <Route exact component={Libro} path="/book" />
        <Route exact component={ComunidadEnfocads} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
