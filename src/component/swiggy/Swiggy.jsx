import FoodDelivery from "./food-delivery/FoodDelivery";

import TopRestaurant from "./top-restaurant/TopRestaurant";
import WhatOnMind from "./whatsonmind/WhatOnMind";

const Swiggy = () => {
  return (
    <>
      <WhatOnMind />
      <TopRestaurant />
      <FoodDelivery />
    </>
  );
};
export default Swiggy;
