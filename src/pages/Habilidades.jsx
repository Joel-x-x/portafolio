import HTML from '../assets/svg/html.svg'
import CSS from '../assets/svg/css.svg'
import JS from '../assets/svg/js.svg'
import REACT from '../assets/svg/react.svg'
import SASS from '../assets/svg/sass.svg'
import GIT from '../assets/svg/git.svg'
import TAILWIND from '../assets/svg/tailwind.svg'
import FIGMA from '../assets/svg/figma.svg'

const Habilidades = () => {
  return (
    <div>
      <div className="fondo-gris-1 pb-32">

        <div className="flex md:max-w-[80%] max-w-[95%] lg:max-w-[85%] m-auto text-gris-100 h-4/5 flex-col lg:flex-row'">

          <h2 className="mb-24 sm:text-5xl text-4xl font-paint">Habilidades</h2>

          <div className='sm:grid flex flex-col lg:grid-cols-5 gap-3 grid-cols-4 lg:grid-rows-2  grid-rows-3'>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>HTML</span>
              <img src={HTML} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>CSS</span>
              <img src={CSS} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center col-start-3 col-end-5 cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>JAVASCRIPT</span>
              <img src={JS} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>REACT</span>
              <img src={REACT} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>SASS</span>
              <img src={SASS} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-2'>GIT</span>
              <img src={GIT} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 py-2 flex text-3xl font-semibold lg:col-start-3 lg:col-end-5 row-start-2 row-end-3 col-start-3 col-end-5">
              <span className='flex justify-center items-center mr-2'>TAILWIND</span>
              <img src={TAILWIND} alt="Logo html" />
            </div>
            <div className="descolgado w-full justify-center cursor-pointer fondo-blur mr-4 pl-6 pr-[28px] py-2 flex text-3xl font-semibold">
              <span className='flex justify-center items-center mr-5'>FIGMA</span>
              <img src={FIGMA} alt="Logo html" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Habilidades;