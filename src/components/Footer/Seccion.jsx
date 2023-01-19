import { BiArrowFromTop } from "react-icons/bi";

const Seccion = () => {
  return (
    <footer className='footer mt-20 w-full h-72 font-paint flex flex-col justify-end items-center'>

      <div className="flex justify-center items-center">
        <h2 className="text-5xl text-gris-100">
          <a href="/">
            <span className='text-gris-300'>{'{'}</span>
            J
            <span className='text-azul'>, </span>
            A
            <span className='text-gris-300'>{'}'}</span>
          </a>
        </h2>
      </div>
      <div className="text-gris-100 w-full flex justify-center my-12">
        <nav className="w-2/3">
          <ul className="flex justify-between w-auto">
            <li className="hover:text-gris-200"><a href="/">INICIO</a></li>
            <li className="hover:text-gris-200"><a href="/">SOBRE MÍ</a></li>
            <li className="hover:text-gris-200"><a href="/">HABILIDADES</a></li>
            <li className="hover:text-gris-200"><a href="/">PROYECTOS</a></li>
            <li className="hover:text-gris-200"><a href="/">CONTACTO</a></li>
            <li className="hover:text-gris-200">
              <a href="/" className="flex">
                CV
                <span className='ml-2 text-2xl mt-1'>
                  <BiArrowFromTop />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Todos los derechos reservados */}
    </footer>
  );
}

export default Seccion;