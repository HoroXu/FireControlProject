import axios from "axios";
// import nprogress from "nprogress";
// import qs from "qs";
import { message } from "antd";
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.source = source;
axios.interceptors.request.use(function (config) {
  return config;
}, handleError);

axios.interceptors.response.use(function responseInterceptor(response) {
  if (response && response.status === 200 && response.data) {
    return handleRes(response.data);
  }
  if (response && response.status === 999 && response.data) {
    return handleRes(response.data);
  }
  message.error(response.data && response.data.responseMessage);
  return Promise.reject(response.data && response.data.responseMessage);
}, handleError);

function handleError(error) {
  return Promise.reject(error);
}

function handleRes(data) {
  return new Promise((resolve, reject) => {
    if (data && data.code) {
      switch (data.code) {
        case 200:
          return resolve(data);
        default:
          return handleError(data.code);
      }
    } else {
      return resolve(data);
    }
  });
}

export default {
  post(url, data) {
    return axios({
      method: "POST",
      url: url,
      data: data,
    })
      .then((res) => {
        return handleRes(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  get(url, params) {
    return axios({
      method: "GET",
      url,
      params,
    })
      .then((response) => {
        return handleRes(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
