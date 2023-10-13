import axios from "../axios";

export function fetchListUsers(number) {
    let response = axios
      .get(`users?page=${number}`)
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

  export function fetchSingleUser(id) {
    let response = axios
      .get(`users/${id}`)
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