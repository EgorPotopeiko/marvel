import axios from "axios";

const $api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/`,
  params: {
    nameStartsWith: process.env.nameStartsWith || null,
    offset: process.env.offset || "0",
    hash: "fc3db029a3d0909cd6ee1f937d1af26e",
    ts: "1",
    apikey: "6508817bccccd7b185fcc36f00c940ab",
  },
});

export default $api;
