import React from "react";

const Checkout = ({ funcionDelFormulario, funcionInput }) => {
  return (
    <div>
      <h1>Checkout de tu compra</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={funcionInput}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={funcionInput}
        />
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
