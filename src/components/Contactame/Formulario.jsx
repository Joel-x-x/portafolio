import { BiRocket } from "react-icons/bi";

const Formulario = () => {
  return (
    <div className="flex-1 flex justify-center">
      <form className="text-gris-100 text-xl flex flex-col w-3/4 relative" action="">
        <input className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Email" type="text" />
        <input className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Nombre" type="text" />
        <textarea className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur resize-none" placeholder="Mensaje" name="" id="" cols="30" rows="10"></textarea>
        <div className="mb-5 rounded-md focus-visible:outline-none py-2 px-6 fondo-blur self-end text-gris-100 text-center cursor-pointer flex justify-center">
          <input className="mr-4" type="submit" value="Enviar" />
          <span className="text-3xl text-gris-100">
            <BiRocket />
          </span>
        </div>
      </form>
    </div>
    
  );
}

export default Formulario