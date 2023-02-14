import github from '../../assets/svg/github.svg';
import link from '../../assets/svg/link-mini.svg';

const Card = ({ imgpng, imgwebp, titulo, texto, icon1, icon2, icon3, icorepo, icolink }) => {
  return (
    <div className='targeta flex w-[300px] h-[200px] overflow-hidden relative'>
      <picture>
        <source srcSet={imgwebp} />
        <img src={imgpng} alt={titulo} loading="lazy"/>
      </picture>
      <div className='targeta-info w-full h-full fondo-blur-3 absolute py-2 px-2'>
        <h3 className='font-bold text-center text-lg'>{titulo}</h3>
        <p className='text-gris-100 flex px-4'>{texto}</p>
        <div className='flex'>
          <img className='ml-2' src={icon1} alt="Icono html" />
          <img src={icon2} alt="Icono css" />
          <img className='ml-2' src={icon3} alt="Icono js" />

          <a href={icorepo} target='_blank' rel="noreferrer" >
            <img className='ml-14 w-[35px]' src={github} alt="Icono github" />
          </a>
          <a href={icolink} target='_blank' rel="noreferrer" >
            <img className='ml-8' src={link} alt="Icono link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;