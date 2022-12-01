import axios from "axios";

export const PostLogin = (body) => {
  return new Promise((resolve) => {
    axios.post("https://www.proformapp.com/_functions/login", body, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        let obj = {
          valid: true,
          msg: "Logged in successfully"
        }
        resolve(obj);
      })
      .catch(error => {
        let err = error.response.data?.error ? error.response.data.error : false;
        let obj = {
          valid: false,
          error: err
        }
        resolve(obj);
      });
  })
}