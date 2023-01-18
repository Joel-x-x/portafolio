import Navegacion from '../components/Inicio/Navegacion'
import Redes from '../components/Inicio/Redes'
import Main from '../components/Inicio/Main'

const Inicio = () => {
  return (
    <div>
      <div className="fondo-gris-1 h-screen relative">
        <Navegacion />
        <Main />
        <Redes />
      </div>
    </div>
  );
}

export default Inicio;