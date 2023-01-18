import Info from '../components/Sobremi/Info'
import Pasatiempos from '../components/Sobremi/Pasatiempos'

const Sobremi = () => {
  return (
    <div>
      <div className="fondo-gris-2 relative pb-16">
        <div className='lg:pt-18 flex sm:max-w-[80%] max-w-[90%] m-auto text-gris-100 h-4/5 flex-col lg:flex-row items-center'>
          <Info />
          <Pasatiempos />
        </div>  
      </div>
    </div>
  );
}

export default Sobremi;