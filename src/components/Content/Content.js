import React, {useState, useEffect} from "react";
import Text from "./Text/Text";
import Title from "./Title/Title";
import ViewMore from "./ViewMore/ViewMore";
import { StyledContent, StyledTitles } from './Content.styled'
import { getAllItems } from "../../utils/Api";


function Content() {
    let emptyArray = [];
    const [items, setItems] = useState(emptyArray);
  

    useEffect(() => {
      if (items.length == 0) {
        getAllItems().then((res) => {
          if (res !== undefined) {
            setItems(res.data);
          }
        });
      }
    });
  
    const [localData, SetData] = useState([]);
    useEffect(() => {
      if (localData.length == 0) {
        getAllItems().then((res) => {
          if (res !== undefined) {
            SetData(res);
          }
        });
      }
    });

    const[titles] = useState([
        { heading: "Carousel", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 1},
        { heading: "Ferris wheel", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 2},
        { heading: "Roller coaster", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 3},
        { heading: "Carousel", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 4},
        { heading: "Ferris wheel", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 5},
        { heading: "Roller coaster", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", id: 6}
    ]);

    return(
        <StyledContent>
            <Text />
            <StyledTitles>
                {items.map(title => (
                    <Title name={title.name} guarantee={title.guarantee} date_of_sale ={title.date_of_sale} sales_location ={title.sales_location}/>
                ))}
            </StyledTitles>
            <ViewMore />
        </ StyledContent>
    );
}

export default Content;