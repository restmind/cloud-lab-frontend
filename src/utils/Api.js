import axios from "axios";

const baseURL =
  " https://hjz6vchefj.execute-api.us-east-2.amazonaws.com/dev/item";
  
const sensorDataURL =
  "https://hjz6vchefj.execute-api.us-east-2.amazonaws.com/dev/sensordata";

export const getAll = async () => {
  try {
    let responseData = await axios.get(baseURL);
    console.log(responseData);
    return responseData.data;
  } catch {
    console.log("error, cant fetch data");
  }
};

export const getAllSensorsData = async () => {
  try {
    let responseData = await axios.get(sensorDataURL);
    console.log(responseData);
    return responseData.data;
  } catch {
    console.log("error, cant fetch data");
  }
};

