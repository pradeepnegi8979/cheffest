import { IoStar } from "react-icons/io5";

import hotelList from "./HotelList.js";
import styles from "./fooddelivery.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Modal from "../modal/Modal.jsx";
const FoodDeliveryResList = ({ selectedFilter }) => {
  //const { cart } = useSelector((state) => state.cart);
  const [resList, setResList] = useState([]);
  //const [modalVisible, setModalVisible] = useState(false);
  const restaurantList = hotelList;
  // let existingData;
  // if (cart.length !== 0) {
  //   existingData = cart[0].data.id;
  //   console.log(existingData, "fasdfadsfasdfsad");
  // } else {
  //   existingData = null;
  // }
  // const handleExistingItem = (item) => {
  //   if (existingData !== item.id) {
  //     setModalVisible(true);
  //   } else {
  //     setModalVisible(false);
  //   }
  // };
  useEffect(() => {
    const res =
      selectedFilter?.id === "03"
        ? restaurantList?.filter((item) => item.fast_dilever === "yes")
        : selectedFilter?.id === "05"
        ? restaurantList?.filter((item) => item.pure_veg === "yes")
        : selectedFilter?.id === "06"
        ? restaurantList?.filter((item) => item.offers === "yes")
        : restaurantList;

    setResList(res);
  }, [selectedFilter, restaurantList]);

  return (
    <>
      <div className={styles.topRestaurantOuter}>
        {resList.map((item) => (
          <div key={item.id}>
            <div
              className={`${styles.topRestaurant} ${
                item.hotel_Availability != "yes" && styles.disabled
              }`}
            >
              {/* {modalVisible && <Modal />} */}
              <Link
                to={`/${item.id}`}
                // onClick={() => handleExistingItem(item.id)}
              >
                <div className={styles.topResImg}>
                  <img src={item.hotel_image} />
                  <h4 className={styles.itemsPriceOnward}>
                    {item.hotel_offer}
                  </h4>
                </div>
                <div className="resDtl">
                  <p className={styles.itemCatName}>{item.hotel_name}</p>
                  <p className={styles.itemDelTime}>
                    <span>
                      <IoStar />
                    </span>
                    {item.hotel_rating} <strong>{item.deliver_timing}</strong>
                  </p>
                  <p className={styles.itemName}>{item.hotel_food}</p>
                  <p className={styles.itemLocation}>{item.hotel_location}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FoodDeliveryResList;
