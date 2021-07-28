import React from 'react';
import Button from "@material-ui/core/Button";
import paymentImg from "../assets/pics/paymentImg.jpg";
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';

 const PaymentPage = () => {

    const handleCancel = ()=>{

    }
    const handleConfirm = ()=>{
        // calc(100%)
    }
    return (
        <div className='payment_container'>
                <Container maxWidth="lg" >
                    <Image src={paymentImg} imageStyle={{height:"650px" }} style={{paddingTop:"calc(60%)"}}/>
                {/* <img src={paymentImg} className="payment_container--img" /> */}
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={()=>handleConfirm()}
              >
                پرداخت
              </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={()=>handleCancel()}
              >
                لغو پرداخت
              </Button>
            </div>
                </Container>
            
        </div>
    )
}
export default PaymentPage;