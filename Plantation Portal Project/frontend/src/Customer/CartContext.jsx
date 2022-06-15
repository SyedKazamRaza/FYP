import React, { useState, useContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

toast.configure();

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}
export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

const notifySuccess = (info) => {
  // Calling toast method by passing string
  toast.success(`${info}`, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    background: "#34A853",
  });
};
const notifyInfo = () => {
  toast.info("Select valid quantity of products.", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    background: "#34A853",
  });
};
const notifyError = (errMsg) => {
  toast.error(`${errMsg}`, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    background: "#34A853",
  });
};

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartServices, setCartServices] = useState([]);

  const handleAddToCart = (item, quantity) => {
    if (quantity === 0) {
      notifyInfo();
      return;
    }
    notifySuccess("Product added to cart.");
    const i = cartProducts.findIndex((prod) => prod.productId === item._id);
    if (i > -1) {
      let cartProd = cartProducts;
      cartProd[i].quantity += quantity;
      cartProd[i].total += cartProd[i].productPrice;
      setCartProducts(cartProd);
    } else {
      const cartProd = {
        sellerId: item.storeInfo[0]._id,
        storeName: item.storeInfo[0].storeName,
        productId: item._id,
        productName: item.productName,
        productPrice: item.price,
        productImage: item.imageurl,
        quantity: quantity,
        total: item.price * parseInt(quantity),
        status: "active",
        rating: "0"
      };
      setCartProducts([...cartProducts, cartProd]);
    }
  };

  const handleAddServicesToCart = (service, leng, wid, total) => {
    notifySuccess("Service added to cart.");
    const i = cartServices.findIndex((ser) => ser.serviceId === service._id);
    if (i > -1) {
      let serv = cartServices;
      serv[i].length += leng;
      serv[i].width += wid;
      serv[i].totalPrice += serv[i].totalPrice;
      setCartServices(serv);
    } else {
      const serv = {
        serviceId: service._id,
        serviceTitle: service.s_title,
        price: service.s_price,
        serviceImg: service.s_image,
        length: leng,
        width: wid,
        totalPrice: total,
        status: "active"
      };
      setCartServices([...cartServices, serv]);
    }
    console.log("Services in cart: ", cartServices);
  };

  const EmptyCart = () => {
    setCartProducts([]);
    setCartServices([]);
  };

  const incrementQuantity = (item) => {
    const newCartProd = cartProducts.map((prod) => {
      if (prod.productId === item.productId) {
        return {
          ...prod,
          quantity: prod.quantity + 1,
          total: prod.total + prod.productPrice,
        };
      }
      return prod;
    });
    setCartProducts(newCartProd);
  };

  const decrementQuantity = (item) => {
    const newCartProd = cartProducts.map((prod) => {
      if (prod.productId === item.productId) {
        return {
          ...prod,
          quantity: prod.quantity - 1,
          total: prod.total - prod.productPrice,
        };
      }
      return prod;
    });
    setCartProducts(newCartProd);
  };

  const removeFromCart = (item) => {
    let newCartProd = cartProducts.filter(
      (prod) => prod.productId !== item.productId
    );
    setCartProducts(newCartProd);
    notifyError("Item removed from cart.");
  };

  const removeServiceFromCart = (item) => {
    let newCartServices = cartServices.filter(
      (serv) => serv.serviceId !== item.serviceId
    );
    setCartServices(newCartServices);
    notifyError("Service removed from cart.");
  };

  return (
    <CartContext.Provider
      value={{ cartProducts: cartProducts, cartServices: cartServices }}
    >
      <CartUpdateContext.Provider
        value={{
          handleAddToCart: handleAddToCart,
          handleAddServicesToCart: handleAddServicesToCart,
          EmptyCart: EmptyCart,
          increment: incrementQuantity,
          decrement: decrementQuantity,
          removeFromCart: removeFromCart,
          removeServiceFromCart: removeServiceFromCart
        }}
      >
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
