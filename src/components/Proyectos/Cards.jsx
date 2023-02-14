import Card from './Card';

const imagenes = require.context('../../assets/img');
const iconos = require.context('../../assets/svg');

const Cards = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto mb-32'>
      <Card
        imgpng={imagenes('./encriptador.png')}
        imgwebp={imagenes('./encriptador.webp')}
        titulo="Encriptador/Desencriptador"
        texto='Proyecto desarrollado como desafío para el curso "Principiante en programación" Alura + Oracle.'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./css-mini.svg')}
        icon3={iconos('./js-mini.svg')}
        icorepo="https://github.com/Joel-x-x/challenge-oracle-decoder"
        icolink="https://joel-x-x.github.io/challenge-oracle-decoder/matrix.html"
      />
      <Card
        imgpng={imagenes('./blog-cafe.png')}
        imgwebp={imagenes('./blog-cafe.webp')}
        titulo="Blog de Café"
        texto='Blog de café acerca de recetas, cursos y talleres incluye una sección de cursos que ofrece y una sección de contacto.'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./css-mini.svg')}
        icon3={iconos('./js-mini.svg')}
        icorepo="https://github.com/Joel-x-x/blogdeCafe"
        icolink="https://joel-x-x.github.io/blogdeCafe/"
      />
      <Card
        imgpng={imagenes('./task-list.png')}
        imgwebp={imagenes('./task-list.webp')}
        titulo="Task List"
        texto='Lista de tareas puedes crear, editar, eliminar y asginar un prioridad y estas guardaran en el LocalStorage de navegador.'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./sass-mini.svg')}
        icon3={iconos('./js-mini.svg')}
        icorepo="https://github.com/Joel-x-x/TaskList"
        icolink="https://joel-x-x.github.io/TaskList/"
      />
      <Card
        imgpng={imagenes('./admin-citas.png')}
        imgwebp={imagenes('./admin-citas.webp')}
        titulo="Citas con el Veterinario"
        texto='Administrador de citas con el cual puedes agentar una cita con tu veterinario, además se almacenaran en el LocalStorage.'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./css-mini.svg')}
        icon3={iconos('./js-mini.svg')}
        icorepo="https://github.com/Joel-x-x/administradorCitasVeterinario"
        icolink="https://joel-x-x.github.io/administradorCitasVeterinario/"
      />
      <Card
        imgpng={imagenes('./carrito.png')}
        imgwebp={imagenes('./carrito.webp')}
        titulo="Carrito de compras"
        texto='Sitio web en el cual puedes seleccionar entre varios cursos online y agregarlos al carrito de compras y eliminarlos'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./css-mini.svg')}
        icon3={iconos('./js-mini.svg')}
        icorepo="https://github.com/Joel-x-x/carritodeCompras"
        icolink="https://joel-x-x.github.io/carritodeCompras/"
      />
      <Card
        imgpng={imagenes('./calculadora.png')}
        imgwebp={imagenes('./calculadora.webp')}
        titulo="Calculadora"
        texto='Calculadora hecha en react que realiza las operaciónes básicas suma, resta, multiplicación y división.'
        icon1={iconos('./html-mini.svg')}
        icon2={iconos('./css-mini.svg')}
        icon3={iconos('./react-mini.svg')}
        icorepo="https://github.com/Joel-x-x/calculadora"
        icolink="https://joel-x-x.github.io/calculadora/"
      />
    </div>
  );
}

export default Cards;