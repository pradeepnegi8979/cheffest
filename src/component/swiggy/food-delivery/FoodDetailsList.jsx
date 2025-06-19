//import images from "../../common/image";
import styles from "./fooddelivery.module.css";
import { IoStar } from "react-icons/io5";
const FoodDetailsList = ({ currentData }) => {
  return (
    <>
      <div className={styles.dtlListOuter}>
        <h2 className={styles.headingName}>{currentData.hotel_name}</h2>
        <div className={styles.dtlList}>
          <ul>
            <li>
              <p className={styles.itemDelTime}>
                <span>
                  <IoStar />
                </span>
                {currentData.hotel_rating}
                <strong>{currentData.hotel_offer}</strong>
              </p>
            </li>

            <li className={styles.resCul}>{currentData.hotel_food}</li>
            <li>
              Outlet: <strong>{currentData.hotel_location}</strong>
            </li>
            <li>
              <strong>{currentData.deliver_timing}</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default FoodDetailsList;
