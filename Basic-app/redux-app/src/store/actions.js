export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";
export const validateLogin = (loginDet) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: LOGIN, payLoad: loginDet });
    }, 1000);
  };
};
