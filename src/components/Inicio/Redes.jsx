import gitHub from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'

const Redes = () => {
  return (
    <div className='fondo-blur w-10 sm:w-20 h-24 sm:h-36 fixed left-0 top-2/4 sm:translate-y-[-50%] z-10'>
      <div className='flex justify-center h-1/2 items-center cursor-pointer'>
        <a href="https://github.com/Joel-x-x" target="_blank" rel="noreferrer">
          <img className='w-14 h-14' src={gitHub} alt="Icono Github" />
        </a>
      </div>
      <div className='flex justify-center h-1/2 items-center cursor-pointer'>
        <a href="https://www.linkedin.com/in/acostajoel0001/" target="_blank" rel="noreferrer">
          <img className='w-14 h-14' src={linkedin} alt="Icono Github" />
        </a>
      </div>
    </div>
  );
}

export default Redes;