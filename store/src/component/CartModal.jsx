import React, { useState, useEffect } from "react";
import { useCartModal } from "../style";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CartTable from "./CartTable";


const CartModal = ({open, handleClose,cartProducts}) => {
    const classes = useCartModal();
    const [sum, setSum] = useState(0);

    useEffect(() => {
        cartProducts.map((product,index)=>{
            let i = sum + product.price
            setSum(i);
        })
    }, []);

  return(
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
            <h2 className={classes.title}>سبد خرید</h2>
            <br />
            <br />
            <br />
            <br />
            <CartTable cart={cartProducts}/>
            <br />
            <br />
            <div className={classes.btnHolder}>
            <h2>مبلغ کل : {sum} <small>تومان</small></h2>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
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
