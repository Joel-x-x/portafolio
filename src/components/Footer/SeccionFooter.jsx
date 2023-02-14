import Cv from "../../assets/pdf/Joel_Acosta_Curriculum.pdf";
import { BiArrowFromTop } from "react-icons/bi";

const SeccionFooter = () => {
  return (
    <footer className='pb-4 footer mt-20 w-full h-72 flex flex-col justify-end items-center'>

      <div className="flex justify-center items-center font-paint">
        <h2 className="text-5xl text-gris-100">
          <a href="#inicio">
            <span className='text-gris-300'>{'{'}</span>
            J
            <span className='text-azul'>, </span>
            A
            <span className='text-gris-300'>{'}'}</span>
          </a>
        </h2>
      </div> {/* Logo */}
      <div className="text-gris-100 w-full md:flex justify-center mt-6 hidden font-paint">
        <nav className="md:w-2/3 w-[90%]">
          <ul className="flex justify-between w-auto">
            <li className="hover:text-gris-200"><a href="#inicio">INICIO</a></li>
            <li className="hover:text-gris-200"><a href="#sobremi">SOBRE MÍ</a></li>
            <li className="hover:text-gris-200"><a href="#habilidades">HABILIDADES</a></li>
            <li className="hover:text-gris-200"><a href="#proyectos">PROYECTOS</a></li>
            <li className="hover:text-gris-200"><a href="#contacto">CONTACTAME</a></li>
            <li className="hover:text-gris-200">
              <a download={'Joel_Acosta_Curriculum'} href={Cv} className="flex">
                CV
                <span className='ml-2 text-2xl mt-1'>
                  <BiArrowFromTop />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-gris-100 md:pt-4 text-q pt-12 text-xs">
        <p>Todos lo derechos reservados | {new Date().getFullYear()}</p>
      </div>
      {/* Todos los derechos reservados */}
    </footer>
  );
}

export default SeccionFooter;