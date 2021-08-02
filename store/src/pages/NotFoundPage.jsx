import React from "react";
import Error from "../assets/pics/error-404.png";
import Container from "@material-ui/core/Container";

const NotFoundPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="error-container">
          <img src={Error} alt="" className="error-container--error" />
          <p>صفحه مورد نظر یافت نشد!</p>
        </div>
      </Container>
    </div>
  );
};
export default NotFoundPage;
