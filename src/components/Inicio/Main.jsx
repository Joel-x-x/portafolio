import subrayado from '../../assets/svg/subrayado.svg';
import caraFeliz from '../../assets/svg/cara-feliz.svg';

const Main = () => {
  return (
    <div className='flex sm:max-w-[80%] max-w-[90%] m-auto text-gris-100 h-4/5 flex-col lg:flex-row'>
      <div className='font-paint flex-1 flex justify-center items-center'>
        <h1 className='sm:text-5xl text-4xl lg:mb-36 mt-24 mb-16 lg:mt-0'>
          <span>HOLA!</span>
          <span>
            <img src={subrayado} alt="Subrayado" />
          </span>
          SOY JOEL ACOSTA
        </h1>
      </div> {/* Lado Izquierdo Saludo */}
      <div className='flex-1 flex flex-col items-center'>
        <div className='sm:text-2xl text-xl h-2/5 w-full flex lg:justify-end justify-center items-end'>
          <div className='fondo-blur py-4 flex justify-center lg:px-4 w-auto sm:px-12 px-4'>
            Desarrollado Front-End
          </div>
        </div>
        <div className='lg:h-2/5 lg:block flex justify-center'>
          <img className='lg:w-[90%] sm:w-[80%] w-[70%] sm:mt-[-53px] lg:mt-0 mt-[-20px] sm:ml-0 ml-12' src={caraFeliz} alt="Imagen cara Felíz" />
        </div>
      </div> {/* Lado Derecho Imagen card */}
    </div>
  );
}

export default Main;