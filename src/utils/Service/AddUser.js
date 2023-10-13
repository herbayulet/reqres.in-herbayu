import axios from "../axios";

export function postAddUser(values) {
    let response = axios
      .get(`users`, values)
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