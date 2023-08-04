import { useFormik } from "formik";
import { useState, useContext } from "react";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import css from "./checkout.css";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      celular: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: getTotalPrice(),
        date: serverTimestamp(),
      };

      let ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((element) => {
        updateDoc(doc(dataBase, "products", element.id), {
          stock: element.stock - element.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio.")
        .min(4, "Debe contener al menos 4 caracteres.")
        .max(15, "Puede contener 15 caracteres como máximo."),
      lastName: Yup.string()
        .required("Este campo es obligatorio.")
        .min(2, "Debe contener al menos dos caracteres.")
        .max(15, "Puede contener 15 caracteres como máximo."),
      email: Yup.string()
        .email("El email ingresado no es válido.")
        .required("Este campo es obligatorio"),
      celular: Yup.number()
        .required("Este campo es obligatorio.")
        .min(7, "El campo debe contener como mínimo siete números"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <div className="buyConfirm">
          <p>Tu compra se realizó con éxito.</p>
          <p>Tu número de orden es {orderId}</p>
        </div>
      ) : (
        <div className="checkoutContainer">
          <h4>Completá tus datos para confirmar la compra</h4>
          <form onSubmit={handleSubmit} className="checkoutForm">
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              name="lastName"
              onChange={handleChange}
              error={errors.lastName ? true : false}
              helperText={errors.lastName}
            />
            <TextField
              type="text"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              type="number"
              label="Celular"
              variant="outlined"
              name="celular"
              onChange={handleChange}
              error={errors.celular ? true : false}
              helperText={errors.celular}
            />

            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
