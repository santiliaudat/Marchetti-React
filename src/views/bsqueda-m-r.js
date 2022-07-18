import React from 'react'

import { Helmet } from 'react-helmet'

import './bsqueda-m-r.css'

const BsquedaMR = (props) => {
  return (
    <div className="bsqueda-m-r-container">
      <Helmet>
        <title>Búsqueda MR - Marchetti</title>
        <meta name="description" content="Marchetti" />
        <meta property="og:title" content="Búsqueda MR - Marchetti" />
        <meta property="og:description" content="Marchetti" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cddaa0fe-329b-4980-ac51-175c84c5aca3/4e8ea9c2-19aa-4f93-a94f-0a54c9bae130?org_if_sml=1"
        />
      </Helmet>
      <div className="bsqueda-m-r-navbar">
        <div className="bsqueda-m-r-left-side">
          <a
            href="https://www.marchettirules.com/"
            className="bsqueda-m-r-link"
          >
            <img
              alt="image"
              src="/playground_assets/%23mr.svg"
              className="bsqueda-m-r-image"
            />
          </a>
          <div className="bsqueda-m-r-burger-menu">
            <svg viewBox="0 0 1024 1024" className="bsqueda-m-r-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <div className="bsqueda-m-r-right-side">
          <div className="bsqueda-m-r-container01">
            <svg viewBox="0 0 1024 1024" className="bsqueda-m-r-icon2">
              <path d="M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z"></path>
            </svg>
            <a
              href="https://www.facebook.com/LicMatiasMarchetti"
              target="_blank"
              rel="noreferrer noopener"
              className="bsqueda-m-r-link1"
            >
              <span>f</span>
              <span>acebook</span>
            </a>
          </div>
          <div className="bsqueda-m-r-container02">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="bsqueda-m-r-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <a
              href="https://www.instagram.com/matias.marchetti"
              target="_blank"
              rel="noreferrer noopener"
              className="bsqueda-m-r-link2"
            >
              instagram
            </a>
          </div>
          <div className="bsqueda-m-r-container03">
            <svg viewBox="0 0 1024 1024" className="bsqueda-m-r-icon6">
              <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
            </svg>
            <a
              href="https://www.youtube.com/channel/UCLqCGfv-_ColrjRT9gqejdQ"
              target="_blank"
              rel="noreferrer noopener"
              className="bsqueda-m-r-link3"
            >
              <span>youtube</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bsqueda-m-r-banner">
        <img
          alt="image"
          src="/playground_assets/captura%20de%20pantalla%202021-07-22%20a%20la(s)%2015.46.24-1500w.png"
          className="bsqueda-m-r-image1"
        />
      </div>
      <div className="bsqueda-m-r-container04">
        <h1 className="bsqueda-m-r-heading">Estamos sumando</h1>
        <span className="bsqueda-m-r-text03">
          Talentos a #MarchettiRules®
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
      <div className="bsqueda-m-r-container05">
        <h1 className="bsqueda-m-r-heading1">Te estamos buscando</h1>
        <div className="bsqueda-m-r-container06">
          <div className="bsqueda-m-r-container07">
            <h1 className="bsqueda-m-r-heading2"></h1>
            <span className="bsqueda-m-r-text04">
              <span className="bsqueda-m-r-text05">
                Community Manager Senior
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <span className="bsqueda-m-r-text06">
          <span className="bsqueda-m-r-text07"></span>
          <span>
            Estamos buscando un
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bsqueda-m-r-text09">Community Manager Senior</span>
          <span>
            {' '}
            para crear y ejecutar la estrategia de nuestras Redes Sociales,
            ayudándonos a aumentar el engagement, alcance y posicionamiento de
            la marca.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Estamos buscando un Community Manager Senior para crear y ejecutar
            la estrategia de nuestras Redes Sociales, ayudándonos a aumentar el
            engagement, alcance y posicionamiento de la marca.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className="bsqueda-m-r-text13">
            Si estás buscando desafiarte a vos mismo y profundizar tu
            experiencia creando y poniendo en marcha una estrategia integral,
            nuestras puertas están abiertas para que des ese próximo paso.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Estamos interesados en un perfil profesional que, más que un
            proveedor de servicios, se convierta en un aliado, una pieza clave
            de nuestro equipo; alguien que pueda sintonizar con la experiencia
            de la marca y diseñar nuevas formas de comunicarla, trabajando bajo
            la modalidad in-house y en constante interacción con nuestro equipo
            de profesionales.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <div className="bsqueda-m-r-container08">
          <div className="bsqueda-m-r-container09">
            <h1 className="bsqueda-m-r-text20">
              <span className="bsqueda-m-r-text21">
                ¿De qué te vas a encargar?
              </span>
            </h1>
            <span className="bsqueda-m-r-text22">
              <span>
                • Crear y gestionar, en conjunto con nuestro equipo de Marketing
                y Contenidos, la estrategia de Facebook, Tik Tok, Pinterest,
                Linkedin, Twitter, Youtube y nuestras dos cuentas de Instagram.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Calendarizar y monitorear la ejecución de esa estrategia.
              </span>
              <br></br>
              <span>
                • Idear las piezas de comunicación junto a nuestro equipo de
                Marketing, Diseño y Contenidos, potenciando el lenguaje de la
                marca.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Hacer un constante monitoreo de tendencias y buenas prácticas
                para incorporar a la estrategia, con foco en incrementar el
                posicionamiento.
              </span>
              <br></br>
              <span>
                • Entregar reportes basados en el seguimiento de performance de
                cada uno de los canales para hacer más eficaces nuestros planes
                de acción.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Hacer relevamientos de la competencia, análisis de nuestro
                público objetivo y evaluaciones de los resultados a corto y
                largo plazo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <h1 className="bsqueda-m-r-text32">
              <span className="bsqueda-m-r-text33">
                ¿Cuáles son los requisitos?
              </span>
            </h1>
            <span className="bsqueda-m-r-text34">
              <span>
                • Experiencia previa de un mínimo de tres años como CM.
              </span>
              <br></br>
              <span>
                • Formación continua y actualizada en materia de comunicación
                digital y RRSS.
              </span>
              <br></br>
              <span>
                • Disponibilidad de 5 horas diarias para trabajar de forma
                remota y una a dos reuniones presenciales por mes, para
                planificar y revisar estrategia.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Conocimiento profundo de las plataformas de Redes Sociales y
                sus actualizaciones.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Experiencia en el desarrollo de contenido y copywriting.
              </span>
              <br></br>
              <span>
                • Manejo de herramientas de diseño y de edición de video
                aplicado a redes sociales.
              </span>
              <br></br>
              <span></span>
            </span>
            <span className="bsqueda-m-r-text42">
              <span>
                • Experiencia previa de un mínimo de tres años como CM.
              </span>
              <span>
                • Experiencia en trabajo con cuentas de más de 100 mil
                seguidores.
              </span>
              <br></br>
              <span>• Experiencia en manejo de cuentas de influencers.</span>
              <br></br>
              <span>
                • Interés en el rubro de la alimentación y el fitness.
              </span>
              <br></br>
              <span>• Contactos dentro de las empresas de RRSS.</span>
              <br></br>
              <span>• Experiencia en manejo de equipos.</span>
              <br></br>
              <span>
                • Formación terciaria o universitaria vinculada a comunicación,
                marketing o publicidad.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <h1 className="bsqueda-m-r-text52">
              <span className="bsqueda-m-r-text53">
                Se valorará, sin ser excluyente
              </span>
            </h1>
          </div>
          <div className="bsqueda-m-r-container10">
            <h1 className="bsqueda-m-r-text54">
              <span className="bsqueda-m-r-text55">
                ¿Qué ofrecemos?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <span className="bsqueda-m-r-text56">
              <span>
                • Crear y gestionar, en conjunto con nuestro equipo de Marketing
                y Contenidos, la estrategia de Facebook, Tik Tok, Pinterest,
                Linkedin, Twitter, Youtube y nuestras dos cuentas de Instagram.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Calendarizar y monitorear la ejecución de esa estrategia.
              </span>
              <br></br>
              <span>
                • Idear las piezas de comunicación junto a nuestro equipo de
                Marketing, Diseño y Contenidos, potenciando el lenguaje de la
                marca.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Hacer un constante monitoreo de tendencias y buenas prácticas
                para incorporar a la estrategia, con foco en incrementar el
                posicionamiento.
              </span>
              <br></br>
              <span>
                • Entregar reportes basados en el seguimiento de performance de
                cada uno de los canales para hacer más eficaces nuestros planes
                de acción.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Hacer relevamientos de la competencia, análisis de nuestro
                público objetivo y evaluaciones de los resultados a corto y
                largo plazo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </div>
        </div>
        <div className="bsqueda-m-r-container11">
          <span className="bsqueda-m-r-text66">
            <br></br>
            <span></span>
            <br></br>
            <span>
              ¡Y un plus! La posibilidad de vivir la experiencia
              #MarchettiRules® en primera persona, a través de un plan
              personalizado de nutrición y actividad física con seguimiento
              constante.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="bsqueda-m-r-container12">
            <h1 className="bsqueda-m-r-text75">
              <span className="bsqueda-m-r-text76">SOBRE MarchettiRules®</span>
            </h1>
            <span className="bsqueda-m-r-text77">
              <span>
                Convencidos de que el mundo -y Latinoamérica en particular- está
                atravesando una crisis en su vínculo con la buena nutrición,
                diseñamos un modelo para brindar acceso a información científica
                de calidad y trabajar en pos de una nueva educación nutricional,
                en donde cada individuo pueda generar una mirada integral sobre
                su salud.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                A partir de la comunidad de 500 mil seguidores generada por el
                licenciado en Nutrición Matías Marchetti, nace #MarchettiRules®,
                una startup que cuenta con distintas unidades de negocio
                divididas en dos áreas de desarrollo íntimamente ligadas: la
                generación de contenidos y la atención nutricional. En la
                primera desarrollamos cursos, talleres, libros digitales y
                físicos, recetarios y pequeños descargables sobre temáticas
                afines a nuestro mensaje. En la segunda, ofrecemos atención
                personalizada, de forma presencial o virtual, por parte de
                Matías y su equipo de nutricionistas. De la fusión de ambas nace
                nuestro propuesta más reciente: Desafíos nutricionales y Equipos
                de seguimiento, en donde de forma grupal y a través de dietas
                semipersonalizadas y contenidos como soporte, se potencia la
                experiencia de salud y bienestar #MarchettiRules®.
              </span>
              <br></br>
              <span></span>
              <span></span>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <a href="https://www.marchettirules.com/" className="bsqueda-m-r-link4">
        <img
          alt="image"
          src="/playground_assets/logoheader-200h.png"
          className="bsqueda-m-r-image2"
        />
      </a>
    </div>
  )
}

export default BsquedaMR
