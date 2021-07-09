export const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  };

  export const logout = () => {
    localStorage.clear();
    // window.location.reload();
  };

  export const findAdminPanelTitle = (title)=>{
    if(title === "products"){
      return 1;
    }
    else if (title === "available"){
      return 2;
    }
    else{
      return 3;
    }
  }