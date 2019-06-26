import axios from "axios";

export function LogIn(user, userData) {
  axios
    .post("/api/auth", {
      email: userData.email,
      password: userData.password
    })
    .then(res => {
      console.log(res.data);
      // localStorage.setItem("x-auth-token", res.data);
      // history.push("/dashboard");
    })
    .catch(err => {
      return { ...user, error: err.response.data };
      //errorDispatch(addError(err.response.data));
    });
}
