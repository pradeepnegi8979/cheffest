import { IoStar } from "react-icons/io5";
import mockdata from "./MockData.js";
import styles from "./fooddelivery.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FoodDeliveryResList = ({ selectedFilter }) => {
  const [resList, setResList] = useState([]);
  const restaurantList = mockdata;
  useEffect(() => {
    const filterData = restaurantList;
    if (selectedFilter?.id === "03") {
      const res = filterData?.filter((item) => item.fast_dilever === "yes");
      setResList(res);
    } else if (selectedFilter?.id === "05") {
      const res = filterData?.filter((item) => item.category_veg === "yes");
      setResList(res);
    } else {
      setResList(filterData);
    }
    // setResList(filterData);
  }, [selectedFilter]);

  return (
    <>
      <div className={styles.topRestaurantOuter}>
        {resList.map((item) => (
          <div
            className={`${styles.topRestaurant} ${
              item.item_status != "available" && styles.disabled
            }`}
            key={item.id}
          >
            <Link to={`/${item.id}`}>
              <div className={styles.topResImg}>
                <img src={item.image} />
                <h4 className={styles.itemsPriceOnward}>
                  {item.item_startp_price}
                </h4>
              </div>
              <div className="resDtl">
                <p className={styles.itemCatName}>{item.restaurant_name}</p>
                <p className={styles.itemDelTime}>
                  <span>
                    <IoStar />
                  </span>
                  {item.restaurant_rating} {item.deliver_timing}
                </p>
                <p className={styles.itemName}>{item.restaurant_item_name}</p>
                <p className={styles.itemLocation}>
                  {item.restaurant_location}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default FoodDeliveryResList;
