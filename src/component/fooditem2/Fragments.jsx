import { useState } from "react";
import React from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import FoodItemsHeading from "./FoodItemHeading.jsx";
import FoodItemsLists from "./FoodItemsLists.Jsx";
import FoodInput from "./FoodInput.jsx";
import Container from "./Container.jsx";
let paragraph =
  " Above is the list of healthy foods that are good for your health and well being.";
const Fragments = () => {
  //let [textToShow, setTextState] = useState("Food item Entered by user");
  //let textSateArr = useState("Food item Entered by user");
  //let textToShow = textSateArr[0];
  //let setTextState = textSateArr[1];

  // let FoodItems = [
  //   "First Item",
  //   "Second Item",
  //   "Third Item",
  //   "Fourth Item",
  //   "Fifth Items",
  //   "Six Items",
  // ];
  let [FoodItems, setFoodItems] = useState([
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Items",
    "Six Items",
  ]);

  //let textToShow = "Food item Entered by user";
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...FoodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("New food entered is :" + newFoodItem);
      //  setFoodItems(event.target.value);
    }

    //  console.log(event);
    //setTextState(event.target.value);
  };
  //console.log(FoodItems);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Container>
              <FoodItemsHeading />
              <FoodInput handleKeyDown={onKeyDown} />
              <ErrorMessage items={FoodItems} />
              <FoodItemsLists items={FoodItems} />
            </Container>
            <Container>
              <p>{paragraph}</p>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Fragments;
