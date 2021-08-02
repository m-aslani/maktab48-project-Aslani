import React, { useState, useEffect } from "react";
import { useCartModal } from "../style";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CartTable from "./CartTable";
import { useHistory } from "react-router-dom";

const CartModal = ({ open, handleClose, cartProducts }) => {
  const classes = useCartModal();
  const [sum, setSum] = useState(0);
  const history = useHistory();

  useEffect(() => {
    cartProducts.map((product, index) => {
      let i = sum + product.price * product.numberOfProduct;
      setSum(i);
    });
  }, []);

  const handleFinalizeCart = () => {
    history.replace("/finalize_Purchese");
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <br />
            <br />
            <h1 className={classes.title}>
              <strong>سبد خرید</strong>
            </h1>
            <br />
            <br />
            <br />
            <br />
            {
              cartProducts.lengh > 0 ?
              <CartTable cart={cartProducts} />
              :
              <p className="message-cart">
                سبد خرید شما خالی است!
                </p>
              }
            <br />
            <br />
            <div className={classes.btnHolder}>
              <h2>
                مبلغ کل : {sum} <small>تومان</small>
              </h2>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => handleFinalizeCart()}
                disabled={cartProducts.lengh > 0 ? false : true}
              >
                نهایی کردن سبد خرید
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default CartModal;
