import Info from '../components/Contactame/Info'
import Formulario from '../components/Contactame/Formulario'
import SeccionFooter from '../components/Footer/SeccionFooter'

const Contacto = () => {
  return (

    <div className="fondo-gris-1 lg:scroll-mt-20 scroll-mt-28" id='contacto'>
      <div className="flex md:max-w-[80%] max-w-[95%] lg:max-w-[85%] m-auto text-gris-200 h-4/5 flex-col">
        <h2 className="mb-16 sm:text-5xl text-4xl font-paint">Contactame</h2>
        <div className='flex flex-col lg:flex-row '>
          <Info />
          <Formulario />
        </div>
      </div>
      <SeccionFooter />
    </div>
  );
}

export default Contacto;