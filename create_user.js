const axios = require("axios");
const API_URL = "http://192.168.187.173:8080/api/auth/local/register";
const API_TOKEN = "Bearer f409d0457e449cb2ef0f1801471c17d54fc92a07e7b75ae3be30cfa83f7243c757beab1f15b2b367c4bca9b552f77b81a43815cd69555a8024f28362ea41fd779772df4fb924b47568e906464d50b76539d957283ace7d76d3e78a3335f5197778648a632a70e4617f1032c635f3f4c0d813733ca6548ee95f05c556bd895f18";

const payload = {
    username:"thitka",
    email:"thitikaraluk17@gmail.com",
    password:"235300Yui",


};
axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err.message);
  });