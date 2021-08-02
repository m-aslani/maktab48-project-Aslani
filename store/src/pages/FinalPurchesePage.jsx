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
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';

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
        orderTime: moment(m).locale("fa").format("YYYY/MM/DD"),
      })
    );
    history.replace("/fake.shaparak");
  };
  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h4" className={classes.text}>
          نهایی کردن سبد خرید
        </Typography>
        {/* <h1>
          </h1> */}
      </div>
      <div className={classes.container}>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.fild}>
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
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                نام خود را وارد کنید
                </p>
            )}
          </div>
          <div className={classes.fild}>
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
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                نام خانوادگی خود را وارد کنید
                </p>
            )}
          </div>
          <div className={classes.fild}>
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
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                آدرس خود را وارد کنید
                </p>
            )}
          </div>
          <div className={classes.fild}>
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
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                شماره همراه خود را وارد کنید
                </p>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                شماره همراه وارد شده اشتباه است
                </p>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                شماره همراه وارد شده اشتباه است
                </p>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
              <p className={classes.error}>
                <WarningIcon className={classes.icon}/>
                شماره همراه وارد شده اشتباه است
                </p>
            )}
          </div>
          <div className={classes.fild}>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
              <DatePicker
                clearable
                okLabel="تأیید"
                cancelLabel="لغو"
                clearLabel="پاک کردن"
                label="تاریخ"
                labelFunc={(date) => (date ? date.format("jYYYY/jMM/jDD") : "")}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.fild}>
          <TextField type="submit" value="ثبت و ادامه" variant="outlined" className={classes.submitBtn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FinalPurchesePage;
