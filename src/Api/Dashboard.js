import axios from "axios";

export const GetFeeds = () => {
  return new Promise((resolve) => {
    axios.get("https://www.proformapp.com/_functions/completedWorkouts", {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        let obj = {
          valid: true,
          workouts: res.data.workouts
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