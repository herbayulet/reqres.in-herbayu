import axios from "../axios";

export async function doDeleteUser(id){
    let response = axios
      .delete(`users${id}`)
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