import React, { useState, useEffect } from "react";
import { useInfoModal } from "../style";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalLabel from "./ModalLabel";
import InfoTable from "./InfoTable";
import Button from "@material-ui/core/Button";
import { delivery } from "../redux/actions/orderActions";
import { useDispatch } from "react-redux";

const MoreInfoModal = ({ open, handleClose, selectedOrder }) => {
  const classes = useInfoModal();
  const [option, setOption] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedOrder.condition === true) {
      setOption(false);
    }
  }, []);

  const handleDelivered = () => {
    dispatch(
      delivery({
        ...selectedOrder,
        condition: true,
      })
    );
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
            <h2 className={classes.title}>نمایش سفارش</h2>
            <ModalLabel label={"نام مشتری:"} text={selectedOrder.name} />
            <ModalLabel label={" ادرس:"} text={selectedOrder.address} />
            <ModalLabel label={" تلفن:"} text={selectedOrder.phoneNumber} />
            <ModalLabel
              label={" زمان تحویل:"}
              text={selectedOrder.deliveryTime}
            />
            <ModalLabel label={"زمان سفارش: "} text={selectedOrder.orderTime} />
            <InfoTable products={selectedOrder.orderedProducts} />
            {option && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelivered}
                className={classes.button}
              >
                تحویل سفارش
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default MoreInfoModal;
