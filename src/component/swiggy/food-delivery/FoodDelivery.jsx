import { useState } from "react";
import { Seperator } from "../../common/Seperator";
import FoodDeliveryFilter from "./FoodDeliveryFilter";
import FoodDeliveryResList from "./FoodDeliveryResList";
import styles from "./fooddelivery.module.css";

const FoodDelivery = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  let headingText = "Restaurants with online food delivery in Noida";

  return (
    <>
      <section className={styles.whatOnMind}>
        <div className="container">
          <div className="row">
            <h2 className={styles.headingText}>{headingText}</h2>
            <div className="col-md-12">
              <div className="row">
                <FoodDeliveryFilter setSelectedFilter={setSelectedFilter} />
                <FoodDeliveryResList selectedFilter={selectedFilter} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Seperator />
    </>
  );
};
export default FoodDelivery;
