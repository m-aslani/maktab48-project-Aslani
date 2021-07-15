import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {addAProduct , editProduct , getProducts} from "../redux/actions/productActions";
import {useModalStyle} from "../style";
import { useFilePicker } from 'use-file-picker';

const MainModal = ({ openModal, handleClose , selectedProduct , option}) => {
  console.log(selectedProduct);
  const classes = useModalStyle();
  const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [image, setImage] = useState(selectedProduct.image);
  const dispatch = useDispatch();
  let imageUrl ;

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    maxFileSize: 50 ,
  });
  
const uploadImage =()=>{
  openFileSelector();
  console.log(filesContent.content);
  // imageUrl = filesContent[0];
  filesContent.map((index,file)=>{
    imageUrl+=file.content;
  })
  console.log(imageUrl);
  setImage(imageUrl);
  }
  const handleSave = (id)=>{
    if(option){
      dispatch(editProduct({
        title,
        category,
        description,
        image,
        id
      }))
    }
    else{
    dispatch(addAProduct({
      title,
      category,
      description,
      image,
    }));
  }
  dispatch(getProducts());
    handleClose();
  }
  
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h3>افزودن / ویرایش کالا</h3>
            <div className={classes.imageContainer}>
              <TextField
                id="outlined-basic"
                label="تصویر"
                variant="outlined"
                className={classes.textFild}
                value={image}
              />
              <Button variant="contained" color="primary" className={classes.button} onClick={() => uploadImage()}>
                Browse
              </Button>
            </div>
            <TextField
              id="outlined-basic"
              label="نام کالا"
              variant="outlined"
              className={classes.textFild}
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category">دسته بندی</InputLabel>
              <Select
                native
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                inputProps={{
                  name: "category",
                  id: "category",
                }}
              >
                <option aria-label="None" value="" />
                <option>لباس زنانه</option>
                <option>لباس مردانه</option>
                <option>الکترونیک</option>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="توضیحات"
              variant="outlined"
              className={classes.textFild}
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          <Button variant="contained" color="primary" onClick={()=>handleSave(selectedProduct.id)} className={classes.button}>
                ذخیره
              </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default MainModal;
