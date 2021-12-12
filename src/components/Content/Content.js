import React, {useState, useEffect} from "react";
import Text from "./Text/Text";
import Title from "./Title/Title";
import ViewMore from "./ViewMore/ViewMore";
import { StyledContent, StyledTitles, AddWrapper, FormWrapper, StyledButton } from './Content.styled'
import { getAll, postItem } from "../../utils/Api";


function Content() {
    let emptyArray = [];
    const [items, setItems] = useState(emptyArray);
    const [addItemState, setAddItemState] = useState("Add new Item");
    const [name, setName] = useState("");
    const [guarantee, setGuarantee] = useState("");
    const [date_of_sale, setDate_of_sale] = useState("");
    const [sales_location, setSales_location] = useState("");
  

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

    const refetchAll = async () => {
      getAll().then((res) => {
        if (res !== undefined) {
          setItems(res.data);
        }
      });
    };
  
    async function submitData() {
      setAddItemState("Add new Item");
      postItem({ name, guarantee, date_of_sale, sales_location }).then((response) =>
      refetchAll()
      );
    }

    return(
        <StyledContent>
            <Text />
            <StyledTitles>
                {items.map(title => (
                    <Title name={title.name} guarantee={title.guarantee} date_of_sale ={title.date_of_sale} sales_location ={title.sales_location}/>
                ))}
            </StyledTitles>
            <ViewMore />
            <AddWrapper>
            {addItemState === "Add new Item" ? (
              <button
                onClick={() => {
                  setAddItemState("Adding a item");
                }}
              >
                Add new Item
              </button>
            ) : (
              <FormWrapper>
                <form onSubmit={submitData}>
                  <label>Item name</label>

                  <input
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    type='text'
                    placeholder='name'
                  />
                  <label>Item guarantee</label>

                  <input
                    onChange={(e) => setGuarantee(e.target.value)}
                    name='guarantee'
                    type='text'
                    placeholder='guarantee'
                  />

                  <label>Item date of sale</label>

                  <input
                    onChange={(e) => setDate_of_sale(e.target.value)}
                    name='date_of_sale'
                    type='text'
                    placeholder='date of sale'
                  />

                  <label>Item sales location</label>

                  <input
                    onChange={(e) => setSales_location(e.target.value)}
                    name='sales_location'
                    type='text'
                    placeholder='sales location'
                  />
                  <StyledButton type='submit'>Submit</StyledButton>
                </form>
              </FormWrapper>
            )}
          </AddWrapper>
        </ StyledContent>
    );
}

export default Content;