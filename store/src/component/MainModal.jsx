import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {addAProduct , editProduct ,getProducts} from "../redux/actions/productActions";
import {useModalStyle} from "../style";
import ImageUploading from "react-images-uploading";

const MainModal = ({ openModal, handleClose , selectedProduct , option}) => {
  const classes = useModalStyle();
  const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [images, setImages] = useState(selectedProduct.image);
  const [image, setImage] = useState(selectedProduct.image);
  const dispatch = useDispatch();
  const maxNumber = 1;
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList[0]);
    setImages(imageList);
    setImage(imageList)
  };
  
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
              {/* <TextField
                id="outlined-basic"
                label="تصویر"
                variant="outlined"
                className={classes.textFild}
                value={image}
                type="file"
                onChange={(e) => uploadImage(e)}
              />
              <Button variant="contained" color="primary" className={classes.button} >
                Browse
              </Button> */}
                    <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {console.log(imageList),
            imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))
            }
          </div>
        )}
      </ImageUploading>
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
                <option>گوشی همراه</option>
                <option>ساعت هوشمند</option>
                <option>لپ تاپ</option>
                <option>هدفن</option>
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
