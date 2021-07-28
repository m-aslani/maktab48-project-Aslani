import React from 'react';
import error from "../assets/pics/Error_perspective_matte_s.png"

 const CancelPaymentPage = () => {
    return (
        <div className="messageContainer">
            <div>
                <img src={error} className="messageContainer--img" />
            </div>
            <div>
                <h2>
                پرداخت شما لغو شد. مجدد تلاش کنید.
                </h2>
            </div>
        </div>
    )
}
export default CancelPaymentPage;