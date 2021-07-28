import React,{useEffect} from 'react';
import check from "../assets/pics/Check_perspective_matte_s.png";
import { useDispatch, useSelector } from "react-redux";
import { clear } from '../redux/actions/cartAction';

 const SuccessfullPaymentPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clear);
    }, [])
    return (
        <div className="messageContainer">
            <div>
                <img src={check} className="messageContainer--img"/>
            </div>
            <div>
                <h2>
                    با تشکر از اعتماد شما. سفارش شما با موفقیت ثبت شد.
                </h2>
            </div>
        </div>
    )
}
 export default SuccessfullPaymentPage;