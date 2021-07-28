import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import paymentImg from "../assets/pics/paymentImg.jpg";
import Container from "@material-ui/core/Container";
import Image from "material-ui-image";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, addNewOrder } from "../redux/actions/orderActions";
import { editProduct } from "../redux/actions/productActions";

const PaymentPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartProducts);
  const user = useSelector((state) => state.user.user);
  const products = useSelector((state)=>state.allProducts.products);
  const [sum, setSum] = useState(0);
  const handleCancel = () => {
    history.replace("/cancelMassage");
  };
  const handleConfirm = () => {
    for(let i=0;i<cart.length;i++){
      for(let j=0;j<products.length;j++){
        if(cart[i].id === products[j].id){
          products[j].number -= cart[i].numberOfProduct
          dispatch(editProduct({...products[j]}))
        }
      }
    }
    dispatch(getAllOrders());
    dispatch(addNewOrder({
        name:user.name,
        address: user.address,
        phoneNumber: user.phoneNumber,
        deliveryTime : user.deliveryTime,
        orderTime: user.orderTime,
        condition:false,
        sum:sum,
        orderedProducts: [...cart]
    }));
    localStorage.clear();
    history.replace("/successfullMassage");
  };

  useEffect(() => {
    cart.map((product, index) => {
      //   console.log(product);
      //   setProducts([
      //     ...products,
      //     {
      //       id: product.id,
      //       title: product.title,
      //       price: product.price,
      //       number: product.numberOfProduct,
      //     },
      //   ]);
      let i = sum + product.price * product.numberOfProduct;
      setSum(i);
    });
    // cart.map((product, index) => {
    //   console.log(product);
    //   setProducts([
    //     ...products,
    //     {
    //       id: product.id,
    //       title: product.title,
    //       price: product.price,
    //       number: product.numberOfProduct,
    //     },
    //   ]);
    // });
  }, []);

  return (
    <div className="payment_container">
      <Container maxWidth="lg">
        <Image
          src={paymentImg}
          imageStyle={{ height: "650px" }}
          style={{ paddingTop: "calc(60%)" }}
        />
        {/* <img src={paymentImg} className="payment_container--img" /> */}
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleConfirm()}
          >
            پرداخت
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleCancel()}
          >
            لغو پرداخت
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default PaymentPage;
