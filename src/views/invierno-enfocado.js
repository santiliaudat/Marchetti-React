import React from 'react'

import { Helmet } from 'react-helmet'

import ServiceCard from '../components/service-card'
import BotonVerde from '../components/boton-verde'
import './invierno-enfocado.css'

const InviernoEnfocado = (props) => {
  return (
    <div className="invierno-enfocado-container">
      <Helmet>
        <title>Invierno-Enfocado - Marchetti</title>
        <meta name="description" content="Marchetti" />
        <meta property="og:title" content="Invierno-Enfocado - Marchetti" />
        <meta property="og:description" content="Marchetti" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cddaa0fe-329b-4980-ac51-175c84c5aca3/4e8ea9c2-19aa-4f93-a94f-0a54c9bae130?org_if_sml=1"
        />
      </Helmet>
      <div className="invierno-enfocado-navbar-container">
        <div className="invierno-enfocado-navbar">
          <div className="invierno-enfocado-left-side">
            <a
              href="https://www.marchettirules.com/"
              className="invierno-enfocado-link"
            >
              <img
                alt="image"
                src="/playground_assets/logoheader-200h.png"
                className="invierno-enfocado-image"
              />
            </a>
            <div className="invierno-enfocado-burger-menu">
              <svg viewBox="0 0 1024 1024" className="invierno-enfocado-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div className="invierno-enfocado-right-side">
            <div className="invierno-enfocado-container01">
              <svg viewBox="0 0 1024 1024" className="invierno-enfocado-icon02">
                <path d="M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z"></path>
              </svg>
              <a
                href="https://www.facebook.com/LicMatiasMarchetti"
                target="_blank"
                rel="noreferrer noopener"
                className="invierno-enfocado-link1"
              >
                <span>f</span>
                <span>acebook</span>
              </a>
            </div>
            <div className="invierno-enfocado-container02">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="invierno-enfocado-icon04"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <a
                href="https://www.instagram.com/matias.marchetti"
                target="_blank"
                rel="noreferrer noopener"
                className="invierno-enfocado-link2"
              >
                instagram
              </a>
            </div>
            <div className="invierno-enfocado-container03">
              <svg viewBox="0 0 1024 1024" className="invierno-enfocado-icon06">
                <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
              </svg>
              <a
                href="https://www.youtube.com/channel/UCLqCGfv-_ColrjRT9gqejdQ"
                target="_blank"
                rel="noreferrer noopener"
                className="invierno-enfocado-link3"
              >
                <span>youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#download" className="invierno-enfocado-link4">
        <div className="invierno-enfocado-hero"></div>
      </a>
      <div className="invierno-enfocado-que-son">
        <div className="invierno-enfocado-container04">
          <div className="invierno-enfocado-heading-container">
            <div className="invierno-enfocado-container05">
              <h1 className="invierno-enfocado-heading">
                ¿Qué son las
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="invierno-enfocado-text03">#MarchettiRules®</span>
              <h1 className="invierno-enfocado-heading1">?</h1>
            </div>
          </div>
        </div>
        <span className="invierno-enfocado-text04 section-Text">
          <span className="invierno-enfocado-text05">
            ¡Es hora que replanteemos nuestro paradigma!
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>​</span>
          <span className="invierno-enfocado-text10">
            Nuestro ser, alma y espíritu no fueron diseñados para sufrir. 
          </span>
          <br></br>
          <span></span>
          <span className="invierno-enfocado-text13">
            Somos seres que buscan placer. Estamos acostumbrados a esperar tener
            algo para sentirnos felices, “realizados”.
          </span>
          <span></span>
        </span>
        <span className="invierno-enfocado-text15 section-Text">
          <span className="invierno-enfocado-text16"></span>
          <br></br>
          <span className="invierno-enfocado-text17">
            Te planteo este nuevo paradigma que cambia esta visión:
          </span>
          <span></span>
        </span>
        <div className="invierno-enfocado-container06">
          <div className="invierno-enfocado-cards-container">
            <ServiceCard
              btn_text="SABER MAS"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></ServiceCard>
            <ServiceCard
              title="HACER"
              btn_text="VER VIDEO"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              description="Trabajando y alimentando tu mente, comenzarás a enamorarte del proceso."
            ></ServiceCard>
            <ServiceCard
              title="TENER"
              btn_text="CONOCER MAS"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              description="¡Lograste tu objetivo! Ahora comienza tu nuevo estilo de vida."
            ></ServiceCard>
          </div>
        </div>
      </div>
      <div className="invierno-enfocado-image1">
        <img
          alt="image"
          src="/playground_assets/medio_desktop-1500w.png"
          className="invierno-enfocado-image2"
        />
      </div>
      <div className="invierno-enfocado-container07">
        <h1 className="invierno-enfocado-heading2">
          ¿Qué contiene el PDF
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <span className="invierno-enfocado-text19">Invierno enfocado</span>
        <h1 className="invierno-enfocado-heading3">?</h1>
      </div>
      <div id="download" className="invierno-enfocado-container08">
        <div className="invierno-enfocado-container09">
          <span className="invierno-enfocado-text20">
            <br></br>
            <span className="invierno-enfocado-text21">
              Si te pasa que al más mínimo descenso de temperatura te dan ganas
              de consumir alimentos hipercalóricos para aumentar tu temperatura
              corporal y después sientes culpa…
            </span>
            <br className="invierno-enfocado-br2"></br>
            <span>​</span>
            <br className="invierno-enfocado-br3"></br>
            <span className="invierno-enfocado-text23">
              Este PDF te ayudará a crear recetas más nutritivas que obtienen el
              mismo resultado que buscas. Además de una lista de alimentos que
              puedes comprar.
            </span>
            <br className="invierno-enfocado-br4"></br>
            <span>​</span>
            <br className="invierno-enfocado-br5"></br>
            <span className="invierno-enfocado-text25">
              Anímate a enfocarte cocinando algo diferente, ¡apto para toda la
              familia!
            </span>
            <br className="invierno-enfocado-br6"></br>
          </span>
          <span className="invierno-enfocado-text26">
            <span className="invierno-enfocado-text27">Descárgalo</span>
            <span className="invierno-enfocado-text28"> </span>
            <span className="invierno-enfocado-text29">GRATIS!</span>
          </span>
          <a
            href="https://www.marchettirules.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="invierno-enfocado-button button"
          >
            Descargar PDF Gratis
          </a>
        </div>
        <div className="invierno-enfocado-container10">
          <img
            alt="image"
            src="/playground_assets/pad-400h.png"
            className="invierno-enfocado-image3"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="invierno-enfocado-image4"
          />
        </div>
      </div>
      <div className="invierno-enfocado-separador"></div>
      <div className="invierno-enfocado-container11">
        <div className="invierno-enfocado-container12">
          <h1 className="invierno-enfocado-heading4">
            {' '}
            Conocé más sobre el innovador metodo
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="invierno-enfocado-text30">
            <span className="invierno-enfocado-text31">#MarchettiRules®</span>
          </span>
        </div>
        <BotonVerde></BotonVerde>
      </div>
      <div className="invierno-enfocado-separador1"></div>
      <div className="invierno-enfocado-container13">
        <div className="invierno-enfocado-container14">
          <h1 className="invierno-enfocado-heading5">
            {' '}
            ¿Qué dicen
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="invierno-enfocado-text32">
            <span className="invierno-enfocado-text33">mis enfocad@s</span>
          </span>
          <h1 className="invierno-enfocado-heading6">?</h1>
        </div>
        <div className="invierno-enfocado-container15">
          <div className="invierno-enfocado-container16">
            <h1 className="invierno-enfocado-text34">
              <span className="invierno-enfocado-text35">Si se puede</span>
            </h1>
            <span className="invierno-enfocado-text36">
              <span>12 Mayo,</span>
              <span> 2020</span>
            </span>
            <span>
              <span className="invierno-enfocado-text40">
                Estoy en 93kg. Pesaba 152 kg. Volví a correr y no me canso, no
                me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                valoro lo importante de organizar mis comidas y hacerlas
                nutritivas, ¡tengo más energía que antes!
              </span>
            </span>
            <span className="invierno-enfocado-text41">
              <span className="invierno-enfocado-text42">
                Julio | Bogotá, Colombia
              </span>
              <span className="invierno-enfocado-text43">&amp;#8203;</span>
            </span>
          </div>
          <div className="invierno-enfocado-container17">
            <h1 className="invierno-enfocado-text44">
              <span className="invierno-enfocado-text45">Si se puede</span>
            </h1>
            <span className="invierno-enfocado-text46">
              <span>12 Mayo,</span>
              <span> 2020</span>
            </span>
            <span>
              <span className="invierno-enfocado-text50">
                Estoy en 93kg. Pesaba 152 kg. Volví a correr y no me canso, no
                me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                valoro lo importante de organizar mis comidas y hacerlas
                nutritivas, ¡tengo más energía que antes!
              </span>
            </span>
            <span className="invierno-enfocado-text51">
              <span className="invierno-enfocado-text52">
                Julio | Bogotá, Colombia
              </span>
              <span className="invierno-enfocado-text53">&amp;#8203;</span>
            </span>
          </div>
        </div>
        <div className="invierno-enfocado-container18">
          <div className="invierno-enfocado-container19">
            <h1 className="invierno-enfocado-text54">
              <span className="invierno-enfocado-text55">Si se puede</span>
            </h1>
            <span className="invierno-enfocado-text56">
              <span>12 Mayo,</span>
              <span> 2020</span>
            </span>
            <span>
              <span className="invierno-enfocado-text60">
                Estoy en 93kg. Pesaba 152 kg. Volví a correr y no me canso, no
                me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                valoro lo importante de organizar mis comidas y hacerlas
                nutritivas, ¡tengo más energía que antes!
              </span>
            </span>
            <span className="invierno-enfocado-text61">
              <span className="invierno-enfocado-text62">
                Julio | Bogotá, Colombia
              </span>
              <span className="invierno-enfocado-text63">&amp;#8203;</span>
            </span>
          </div>
          <div className="invierno-enfocado-container20">
            <h1 className="invierno-enfocado-text64">
              <span className="invierno-enfocado-text65">Si se puede</span>
            </h1>
            <span className="invierno-enfocado-text66">
              <span>12 Mayo,</span>
              <span> 2020</span>
            </span>
            <span>
              <span className="invierno-enfocado-text70">
                Estoy en 93kg. Pesaba 152 kg. Volví a correr y no me canso, no
                me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                valoro lo importante de organizar mis comidas y hacerlas
                nutritivas, ¡tengo más energía que antes!
              </span>
            </span>
            <span className="invierno-enfocado-text71">
              <span className="invierno-enfocado-text72">
                Julio | Bogotá, Colombia
              </span>
              <span className="invierno-enfocado-text73">&amp;#8203;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="invierno-enfocado-separador2"></div>
      <div className="invierno-enfocado-container21">
        <div className="invierno-enfocado-container22">
          <h1 className="invierno-enfocado-heading7">
            Si tenés alguna duda o
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="invierno-enfocado-text74">
            <span className="invierno-enfocado-text75">comentario</span>
          </span>
        </div>
        <a
          href="https://www.marchettirules.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="invierno-enfocado-link5 button"
        >
          Consultanos por wathsapp
        </a>
      </div>
      <div className="invierno-enfocado-separador3"></div>
      <div className="invierno-enfocado-footer-container">
        <div className="invierno-enfocado-footer">
          <div className="invierno-enfocado-social-links">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="invierno-enfocado-icon08"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="invierno-enfocado-icon10"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="invierno-enfocado-icon12"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="invierno-enfocado-copyright-container">
            <svg viewBox="0 0 1024 1024" className="invierno-enfocado-icon14">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="invierno-enfocado-link6 anchor">
              Matías Marchetti, 2021
            </span>
          </div>
        </div>
      </div>
      <form className="invierno-enfocado-form"></form>
    </div>
  )
}

export default InviernoEnfocado
