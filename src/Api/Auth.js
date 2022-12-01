import axios from "axios";

export const PostLogin = (body) => {
  return new Promise((resolve) => {
    axios.post("https://www.proformapp.com/_functions/login", body, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        let obj = {
          valid: true,
          msg: res.data.message
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

export const PostSignUp = (body) => {
  return new Promise((resolve) => {
    axios.post("https://www.proformapp.com/_functions/register", body, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        let obj = {
          valid: true,
          msg: res.data.message
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