import axios from "axios";

const baseURL =
  "https://yiwnc2nsvd.execute-api.us-east-2.amazonaws.com/dev/item";
  

export const getAll = async () => {
  try {
    let responseData = await axios.get(baseURL);
    console.log(responseData);
    return responseData.data;
  } catch {
    console.log("error, cant fetch data");
  }
};


export const postItem = async (body) => {
  // const json = JSON.stringify(body);
  try {
    let responseData = await axios.post(baseURL, body);
    console.log(responseData);
    return responseData.data;
  } catch {
    console.log("error, cant fetch data");
  }
};
