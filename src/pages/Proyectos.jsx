import Cards from '../components/Proyectos/Cards'

const Proyectos = () => {
  return (
    <div>
      <div className="fondo-gris-2">
        <div className="flex md:max-w-[80%] max-w-[95%] lg:max-w-[85%] m-auto text-gris-200 h-4/5 flex-col">
          <h2 className="mb-24 sm:text-5xl text-4xl font-paint">Proyectos</h2>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Proyectos;