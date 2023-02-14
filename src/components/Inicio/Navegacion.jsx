import { BiArrowFromTop, BiMenu, BiX } from "react-icons/bi";
import Cv from "../../assets/pdf/Joel_Acosta_Curriculum.pdf";
import { useState } from 'react'

const Navegacion = () => {

  const [clic, setClic] = useState(true)

  const mostrarOcultarMenu = () => {
    setClic(!clic)
  }

  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if(window.scrollY >= 60) {
      setFix(true) 
    }
    else {
      setFix(false) 
    }
  }

  window.addEventListener('scroll', setFixed)

  return (
    <div className={`transition-all duration-500 ease-linear font-paint flex pt-5 px-7 items-center ${fix ? 'barra-statica' : ''}`}>

      <div className="w-1/2 lg:w-1/3">
        <h2 className="text-4xl text-gris-100">
          <a href="#inicio">
            <span className={fix ? 'text-gris-100' : 'text-gris-300'}>{'{'}</span>
            J
            <span className={fix ? 'text-gris-100' : 'text-azul'}>, </span>
            A
            <span className={fix ? 'text-gris-100' : 'text-gris-300'}>{'}'}</span>
          </a>
        </h2>
      </div> {/* Logo */}
      <div className="pt-2 w-4/5 lg:w-2/3 text-xl text-gris-200 lg:block hidden">
        <nav>
          <ul className="flex justify-between w-auto">
            <li className="hover:text-gris-100"><a href="#inicio">INICIO</a></li>
            <li className="hover:text-gris-100"><a href="#sobremi">SOBRE MÍ</a></li>
            <li className="hover:text-gris-100"><a href="#habilidades">HABILIDADES</a></li>
            <li className="hover:text-gris-100"><a href="#proyectos">PROYECTOS</a></li>
            <li className="hover:text-gris-100"><a href="#contacto">CONTACTAME</a></li>
            <li className="hover:text-gris-100">
              <a download={'Joel_Acosta_Curriculum'} href={Cv} className="flex">
                CV
                <span className='ml-2 text-2xl mt-1'>
                  <BiArrowFromTop />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div> {/* Menú Laptop */}

      <div className="lg:hidden flex text-6xl text-gris-200 w-1/2 justify-end">
        <nav>
          <ul className="flex">
            <li className="hover:text-gris-100 text-4xl flex items-center mr-2">
              <a download={'Joel_Acosta_Curriculum'} href={Cv} className="flex">
                CV
                <span className='ml-2 mt-1'>
                  <BiArrowFromTop />
                </span>
              </a>
            </li>

            <li onClick={mostrarOcultarMenu}  className="hover:text-gris-100 cursor-pointer">
                <BiMenu />
            </li>

          </ul>
        </nav>
      </div> {/* Menú Tablet/Telefono */}

      <div className={`flex-col absolute w-96 max-w-full h-96 top-0 right-0 fondo-blur-3 ${clic ? 'hidden': 'flex'}`}>
        <div className="text-6xl flex justify-end pr-7 pt-5">
          <nav onClick={mostrarOcultarMenu} >
            <ul className="flex cursor-pointer">
              <li className="text-gris-100 hover:text-gris-200">
                  <BiX />
              </li>
            </ul>
          </nav>
        </div> {/* Boton cerrar */}
        
        <div className="flex-1">
          <nav className="h-full">
            <ul className="flex flex-col items-center w-auto text-2xl">
              <li className="text-gris-100 hover:text-gris-200 mb-4"><a href="#inicio">INICIO</a></li>
              <li className="text-gris-100 hover:text-gris-200 mb-4"><a href="#sobremi">SOBRE MÍ</a></li>
              <li className="text-gris-100 hover:text-gris-200 mb-4"><a href="#habilidades">HABILIDADES</a></li>
              <li className="text-gris-100 hover:text-gris-200 mb-4"><a href="#proyectos">PROYECTOS</a></li>
              <li className="text-gris-100 hover:text-gris-200 mb-4"><a href="#contacto">CONTACTAME</a></li>
            </ul>
          </nav>
        </div> {/* Menu */}
      </div> {/* Menú despegable */}

    </div>
  );
}

export default Navegacion;