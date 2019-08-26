import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'

export default class Footer extends Component {

  render () {
    return (
      <footer className='ext-footer'>
        <div className='footer container'>
          <div className='institutional'>
            <div className='logo gob'>
              <a href='/'>
                <img src='/ext/lib/site/footer/logo-sunchales.png' />
              </a>
            </div>
            <p className='text-muted small'>
            Esta plataforma es una adaptación de <a target="_blank" href="https://www.argentina.gob.ar/">Argentina.gob.ar</a> bajo la licencia de <a href='https://creativecommons.org/licenses/by/2.5/ar/'>Creative Commons Reconocimiento 2.5 Argentina License</a>
            </p>
          </div>
            <nav className='menu'>
              <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
              <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
              <Link to='/ayuda/acerca'>Contacto</Link>
            </nav>
            <nav className='menu'>
              <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
              <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
            </nav>
        </div>
      </footer>
    )
  }
}
