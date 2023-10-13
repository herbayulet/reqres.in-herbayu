import axios from "../axios";

export async function doUpdateUser(id, value){
    let response = axios
      .put(`users/${id}`, value)
      .then(async (response) => {
        return response;
      })
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });
  
    return response;
  }