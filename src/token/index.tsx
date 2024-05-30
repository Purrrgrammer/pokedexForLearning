import notie from "notie";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useTokenValue = () => {
  const saveToken = (tokenData: any) => {
    window.localStorage.setItem("token", JSON.stringify(tokenData));
    setToken(tokenData);
  };
  const saveUser = (userData: any) => {
    window.localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  const getToken: any = () => {
    let tokenString = window.localStorage.getItem("token")!;
    let userString = window.localStorage.getItem("currentuser")!;
    if (!tokenString) {
      return { userToken: "", userData: "" };
    }
    let userToken = JSON.parse(tokenString);
    let userData = JSON.parse(userString);
    if (userToken) {
      var decode = jwtDecode(userToken);
      console.log("decoded", decode);
      let currentTime = Math.floor(new Date().getTime() / 1000);
      let exp = decode.exp! - currentTime;
      console.log("exp", exp / 60, "minutes left");
      if (exp <= 0) {
        clearToken();
        return { userToken: "", userData: "" };
      }
      return { userToken, userData };
    }
  };
  const clearToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentuser");
    setToken("");
    setUser("");
  };

  const [token, setToken] = useState(getToken().userToken); //default
  const [user, setUser] = useState(getToken().userData);
  return { token, saveToken, clearToken, user, saveUser };
};
// token no 2-----------------------------------------------------------------------
export const useToken = (inputToken: string) => {
  window.localStorage.setItem("token", JSON.stringify(inputToken));
  // const saveToken = () => {};
  // saveToken();

  const getToken: any = () => {
    let tokenStorage = localStorage.getItem("token");
    let userToken = JSON.parse(tokenStorage!);
    if (userToken) {
      return userToken;
    } else {
      return;
    }
  };
  const [token, setToken] = useState<string>(getToken());
  setToken(inputToken);
  if (token === null) {
  }
  return { token };
};

export const clearToken = async () => {
  try {
    localStorage.removeItem("token");
    notie.alert({
      type: "warning", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
      text: "Logged out",
      stay: false, // optional, default = false
      time: 1, // optional, default = 3, minimum = 1,
      position: "top", // optional, default = 'top', enum: ['top', 'bottom']
    });
    // window.location.reload();
  } catch (err) {}
};
// token flow > receive token from param > token is valid > setTokenToStorage
// token invalid >
