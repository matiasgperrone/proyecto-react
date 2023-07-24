import React, { useState } from "react";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log(userData);
    navigate("/");
  };

  const funcionInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout
      funcionDelFormulario={funcionDelFormulario}
      funcionInput={funcionInput}
    />
  );
};

export default CheckoutContainer;
