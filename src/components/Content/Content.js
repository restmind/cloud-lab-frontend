import React, {useState, useEffect} from "react";
import Text from "./Text/Text";
import Title from "./Title/Title";
import SensorTitle from "./Title/SensorTitle";
import ViewMore from "./ViewMore/ViewMore";
import { StyledContent, StyledTitles } from './Content.styled'
import { getAll, getAllSensorsData } from "../../utils/Api";


function Content() {
    let emptyArray = [];
    const [items, setItems] = useState(emptyArray);
    useEffect(() => {
      if (items.length == 0) {
        getAll().then((res) => {
          if (res !== undefined) {
            setItems(res.data);
          }
        });
      }
    });
  
    const [localData, SetData] = useState([]);
    useEffect(() => {
      if (localData.length == 0) {
        getAll().then((res) => {
          if (res !== undefined) {
            SetData(res);
          }
        });
      }
    });



    let emptyArray2 = [];
    const [sensors_data, setSensors] = useState(emptyArray2);
    useEffect(() => {
      if (sensors_data.length == 0) {
        getAllSensorsData().then((res) => {
          if (res !== undefined) {
            setSensors(res.data);
          }
        });
      }
    });

    const [localData2, SetData2] = useState([]);
    useEffect(() => {
      if (localData2.length == 0) {
        getAllSensorsData().then((res) => {
          if (res !== undefined) {
            SetData2(res);
          }
        });
      }
    });
    return(
        <StyledContent>
            <Text />
            <StyledTitles>
                {items.map(title => (
                    <Title name={title.name} guarantee={title.guarantee} date_of_sale ={title.date_of_sale} sales_location ={title.sales_location}/>
                ))}
            </StyledTitles>
            <StyledTitles>
                {sensors_data.map(sensor => (
                    <SensorTitle sensor_name={sensor.sensor_name} sensor_type={sensor.sensor_type} time_stamp ={sensor.time_stamp} sensor_data ={sensor.sensor_data}/>
                ))}
            </StyledTitles>
            <ViewMore />
        </ StyledContent>
    );
}

export default Content;