import axios from "axios";

export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: `https://fakestoreapi.com/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const deleteProductById = async(id)=>{
   await axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
     console.log(res);
   })
}

export const editProductById = async (id , newProduct)=>{
let res = await axios.put(``,newProduct).catch((err)=> console.log(err));
console.log(res);
return res;
}

export const addProduct = async (product)=>{
  let res = await axios.post("http://localhost:5000/products",product);
  console.log(res);
  return res;
}