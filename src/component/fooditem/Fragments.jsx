import React from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import FoodItemsHeading from "./FoodItemHeading.jsx";
import FoodItemsLists from "./FoodItemsLists.Jsx";
import Container from "./Container.jsx";
let paragraph =
  " Above is the list of healthy foods that are good for your health and well being.";
const Fragments = () => {
  let FoodItems = [
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Items",
  ];
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Container>
              <FoodItemsHeading />
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
