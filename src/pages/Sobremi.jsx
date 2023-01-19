import Info from '../components/Sobremi/Info'
import Pasatiempos from '../components/Sobremi/Pasatiempos'

const Sobremi = () => {
  return (
    <div>
      <div className="fondo-gris-2 relative pb-16 lg:scroll-mt-20 scroll-mt-28" id='sobremi'>
        <div className='lg:pt-18 flex md:max-w-[80%] max-w-[95%] lg:max-w-[85%] m-auto text-gris-100 h-4/5 flex-col lg:flex-row'>
          <Info />
          <Pasatiempos />
        </div>  
      </div>
    </div>
  );
}

export default Sobremi;