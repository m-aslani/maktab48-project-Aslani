import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useFormStyle } from "../style/form";
import { useForm } from "react-hook-form";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/actions/userAction";
import { useHistory} from "react-router-dom";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const FinalPurchesePage = () => {
  const [selectedDate, handleDateChange] = useState(moment());
  const m = moment();
  const history = useHistory();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useFormStyle();
  const onSubmit = (data) => {
    let user = data;
    dispatch(
      setUserInfo({
        name: user.firstName + " " + user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        deliveryTime: selectedDate.format("jYYYY/jMM/jDD"),
        orderTime: moment(m).locale('fa').format('YYYY/MM/DD'),
      })
    );
history.replace("/fake.shaparak");
  };
  return (
    <div>
      <div>
        <h1>نهایی کردن سبد خرید</h1>
      </div>
      <div>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام"
            {...register(
              "firstName",
              { required: true, maxLength: 80 },
              {
                validate: {
                  emptyFild: (value) => value !== "",
                },
              }
            )}
          />
          {errors.firstName && errors.firstName.type && (
            <p>نام خود را وارد کنید</p>
          )}
          <TextField
            label="نام خانوادگی"
            {...register(
              "lastName",
              { required: true, maxLength: 80 },
              {
                validate: {
                  emptyFild: (value) => value !== "",
                },
              }
            )}
          />
          {errors.lastName && errors.lastName.type && (
            <p>نام خانوادگی خود را وارد کنید</p>
          )}
          <TextField
            label="آدرس"
            {...register(
              "address",
              { required: true },
              {
                validate: {
                  emptyFild: (value) => value !== "",
                },
              }
            )}
          />
          {errors.address && errors.address.type && (
            <p>آدرس خود را وارد کنید</p>
          )}
          <TextField
            type="tel"
            label="تلفن همراه"
            {...register(
              "phoneNumber",
              {
                required: true,
                maxLength: 14,
                minLength: 11,
                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              },
              {
                validate: {
                  emptyFild: (value) => value !== "",
                },
              }
            )}
          />
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (
            <p>شماره همراه خود را وارد کنید</p>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
            <p>شماره همراه وارد شده اشتباه است</p>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
            <p>شماره همراه وارد شده اشتباه است</p>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
            <p>شماره همراه وارد شده اشتباه است</p>
          )}

          <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
            <DatePicker
              clearable
              okLabel="تأیید"
              cancelLabel="لغو"
              clearLabel="پاک کردن"
              labelFunc={(date) => (date ? date.format("jYYYY/jMM/jDD") : "")}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>

          <TextField type="submit" />
        </form>
      </div>
    </div>
  );
};
export default FinalPurchesePage;
