import { Seperator } from "../../common/Seperator";

import styles from "./toprestaurant.module.css";
import TopRestaurantList from "./TopRestaurantList";
const TopRestaurant = () => {
  let headingText = "Top restaurant chains in Noida";
  return (
    <>
      <section className={styles.whatOnMind}>
        <div className="container">
          <div className="row">
            <h2 className={styles.headingText}>{headingText}</h2>
            <div className="col-md-12">
              <div className="row">
                <TopRestaurantList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Seperator />
    </>
  );
};
export default TopRestaurant;
