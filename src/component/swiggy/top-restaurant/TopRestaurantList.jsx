import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { IoStar } from "react-icons/io5";

import styles from "./toprestaurant.module.css";

import noodles from "../../../assets/swiggyImages/noodles.png";
import biryani from "../../../assets/swiggyImages/biryani.webp";
import pizza from "../../../assets/swiggyImages/pizza.jpg";
import rolls from "../../../assets/swiggyImages/rolls.jpeg";
import parantha from "../../../assets/swiggyImages/parantha.webp";
import pureveg from "../../../assets/swiggyImages/pure-veg.avif";
import tea from "../../../assets/swiggyImages/tea.jpeg";
import gulabjamun from "../../../assets/swiggyImages/gulab-jamun.jpeg";
import coffee from "../../../assets/swiggyImages/coffee.jpeg";
import bakery from "../../../assets/swiggyImages/bakery.jpg";
const TopRestaurantList = () => {
  const restaurantList = [
    {
      id: "01",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "02",
      image: bakery,
      item_startp_price: "10% off above Rs 1099",
      restaurant_name: "Bakery Word",
      restaurant_rating: "4.3",
      deliver_timing: "45-45 mins",
      restaurant_item_name: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
      restaurant_location: "Indirapuram",
      item_status: "available",
    },
    {
      id: "03",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "04",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "05",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },

    {
      id: "06",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "07",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "08",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: "25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
    {
      id: "09",
      image: noodles,
      item_startp_price: "Items at 99",
      restaurant_name: "pizza hut",
      restaurant_rating: "4.2",
      deliver_timing: ". 25-30 mins",
      restaurant_item_name: "Pizza",
      restaurant_location: "Noida",
      item_status: "available",
    },
  ];
  return (
    <>
      <div className="topRestaurantOuter">
        <Swiper
          slidesPerView={4.2}
          spaceBetween={35}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
           breakpoints={{
    320: {
      slidesPerView:2,
      spaceBetween: 15,
    },
    475: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 6.5,
      spaceBetween: 35,
    },
  }}
        >
          {restaurantList.map((item) => (
            <SwiperSlide className={styles.topRestaurant} key={item.id}>
              <a href="#">
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
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default TopRestaurantList;
