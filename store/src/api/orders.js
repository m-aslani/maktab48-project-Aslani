import axios from "axios";

export const getOrders = async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/orders",
        headers: { "content-type": "application/json" },
      }).catch((err) => console.log(err));
      return res;
}

export const getDeliveredOrdersList = async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/orders?condition=true",
        headers:{ "content-type": "application/json" },
    }).catch((err) => console.log(err));
    console.log(res);
    return res;
}
export const getNotDeliveredOrdersList = async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/orders?condition=false",
        headers:{ "content-type": "application/json" },
    }).catch((err) => console.log(err));
    console.log(res);
    return res;
}

export const deliveredOrder = async (deliveredOrder) =>{
    const res = await axios
    .put(`http://localhost:5000/orders/${deliveredOrder.id}`, deliveredOrder)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export const addOrder = async (order)=>{
    let res = await axios.post("http://localhost:5000/orders",order);
    console.log(res);
    return res;
}