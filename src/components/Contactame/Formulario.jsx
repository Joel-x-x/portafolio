// import { BiRocket } from "react-icons/bi";
import Swal from 'sweetalert2';
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  message: ""
}

const validationForm = (form) => { 
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexComments = /^.{1,255}$/;

  if(!form.name.trim()) {
    errors.name = 'El campo "Nombre" es requerido.'
  }
  else if(!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" no acepta símbolos desconocidos'
  }

  if(!form.email.trim()) {
    errors.email = 'El campo "Email" es requerido.'
  }
  else if(!regexEmail.test(form.email.trim())) {
    errors.email = 'Campo "Email" incorrecto'
  }

  if(!form.message.trim()) {
    errors.message = 'El campo "Mensaje" es requerido.'
  }
  else if(!regexComments.test(form.message.trim())) {
    errors.message = 'Campo "Email" no puede exceder los 255 caracteres.'
  }

  return errors
};

const Formulario = () => {

  const {
    form,
    errors,
    // loading,
    response,
    handleChange,
    handleBlur,
    handleSumbit } = useForm(initialForm, validationForm)

  const enviado = () => {

    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Mensaje Enviado ✌',
      showConfirmButton: false,
      timer: 1500,
      background: '#4C5C69',
      color: '#EAEAEA'
    })
  }

  return (
    <div className="flex-1 flex justify-center">
      {/* <form action="https://formsubmit.co/5a2789908207b1ead58a51e28e06385a" method="POST" className="text-gris-100 text-xl flex flex-col w-3/4 relative">
        <input name="name" className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Nombre" type="text" />

        <input name="email" className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Email" type="email" />

        <textarea className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur resize-none" placeholder="Mensaje" name="message" id="" cols="30" rows="10"></textarea>
        <fieldset className="mb-5 rounded-md focus-visible:outline-none py-2 px-6 fondo-blur self-end text-gris-100 text-center flex justify-center">
          <input onClick={enviado} className="mr-4 cursor-pointer" type="submit" value="Enviar" />
          <span className="text-3xl text-gris-100">
            <BiRocket />
          </span>
          <input type="hidden" name="_next" value="http://localhost:3000/#contacto" />
        </fieldset>
      </form> */}

      <form onSubmit={handleSumbit} className="text-gris-100 text-xl flex flex-col w-3/4 relative">
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          name="name"
          className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Nombre" type="text" />
  	    {errors.name && <p className="text-[#e44c4c] text-base mb-5 px-2">{ errors.name }</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
          name="email"
          className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur" placeholder="Email"
          type="email" />
        {errors.email && <p className="text-[#e44c4c] text-base mb-5 px-2">{ errors.email }</p>}  
        <textarea
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.message}
          required
          className="w-full mb-5 py-2 rounded-md focus-visible:outline-none p-2 fondo-blur resize-none"
          placeholder="Mensaje"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        {errors.message && <p className="text-[#e44c4c] text-base mb-5 px-2">{ errors.message }</p>}

        {/* <fieldset className="mb-5 rounded-md focus-visible:outline-none py-2 px-6 fondo-blur self-end text-gris-100 text-center flex justify-center"> */}
          <input className="mr-4 cursor-pointer focus-visible:outline-none flex justify-center w-44 py-2 self-center border-2 rounded-lg border-gris-300 border-solid" type="submit" value="Enviar" />
          {/* <span className="text-3xl text-gris-100"> */}
            {/* <BiRocket /> */}
          {/* </span> */}
          {/* <input type="hidden" name="_next" value="http://localhost:3000/#contacto" /> */}
        {/* </fieldset> */}
      </form>
      {response && enviado()}
    </div>

  );
}

export default Formulario