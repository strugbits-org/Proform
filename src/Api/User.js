import axios from "axios";

export const GetUserInfo = (id) => {
  return new Promise((resolve) => {
    axios.get(`https://www.proformapp.com/_functions/getUserData?memberId=${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        let obj = {
          valid: true,
          user: res.data.user
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

export const UpdateUserInfo = (body) => {
  return new Promise((resolve) => {
    axios.post("https://www.proformapp.com/_functions/updateUserData", body, {
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

export const UpdateProfilePic = (body, id) => {
  return new Promise((resolve) => {
    axios.post(`https://www.proformapp.com/_functions/updateImage?memberId=${id}`, body, {
      headers: { 'Content-Type': 'image/jpeg' }
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