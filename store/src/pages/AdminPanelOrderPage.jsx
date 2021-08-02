import React, { useState } from "react";
import { useProductsPageStyle } from "../style";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Delivered from "../component/Delivered";
import NotDelivered from "../component/NotDelivered";

const AdminPanelOrderPage = () => {
  const classes = useProductsPageStyle();
  const [deliveredList, setDeliveredList] = useState(true); // false for NotDelivered , true for Delivered
  const [value, setValue] = useState("notDelivered");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (value === "delivered") {
        setDeliveredList(true);
    }
    else{
        setDeliveredList(false);
    }
  };

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>مدیریت موجودی و قیمت</h1>
        <FormControl component="fieldset" >
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="deliveryCondition"
            name="deliveryCondition"
            value={value}
            onChange={handleChange}
            className={classes.radioGroupg}
          >
            <FormControlLabel
              value="delivered"
              control={<Radio />}
              label="سفارش های تحویل شده"
            />
            <FormControlLabel
              value="notDelivered"
              control={<Radio />}
              label="سفارش های در انتظار ارسال"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {
      !deliveredList ? 
      <Delivered/>
      :
      <NotDelivered/>
      }
    </div>
  );
};
export default AdminPanelOrderPage;
