import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import styles from "./whatonmind.module.css";
import noodles from "../../../assets/swiggyImages/noodles.png";
import biryani from "../../../assets/swiggyImages/biryani.webp";
import pizza from "../../../assets/swiggyImages/pizza.jpg";
import rolls from "../../../assets/swiggyImages/rolls.jpeg";
import parantha from "../../../assets/swiggyImages/parantha.webp";
import pureveg from "../../../assets/swiggyImages/pure-veg.avif";
import tea from "../../../assets/swiggyImages/tea.jpeg";
import gulabjamun from "../../../assets/swiggyImages/gulab-jamun.jpeg";
import coffee from "../../../assets/swiggyImages/coffee.jpeg";
const WhatOnMindList = () => {
  const itemList = [
    {
      id: "01",
      image: noodles,
      item_name: "noodles",
      item_status: "available",
    },
    {
      id: "02",
      image: biryani,
      item_name: "Biryani",
      item_status: "davailable",
    },
    {
      id: "03",
      image: pizza,
      item_name: "Pizzas",
      item_status: "available",
    },
    {
      id: "04",
      image: rolls,
      item_name: "Rolls",
      item_status: "available",
    },
    {
      id: "05",
      image: parantha,
      item_name: "Parantha",
      item_status: "available",
    },

    {
      id: "06",
      image: pureveg,
      item_name: "Pure Veg",
      item_status: "available",
    },
    {
      id: "07",
      image: tea,
      item_name: "Tea",
      item_status: "available",
    },
    {
      id: "08",
      image: gulabjamun,
      item_name: "Gulab Jamun",
      item_status: "available",
    },
    {
      id: "09",
      image: coffee,
      item_name: "Coffee",
      item_status: "available",
    },
  ];
  return (
    <>
      <div className={styles.DishOuter}>
        <Swiper
          slidesPerView={6.5}
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
          {itemList.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`${styles.item} ${
                item.item_status != "available" && styles.disabled
              }`}
            >
              <a href="#">
                <img src={item.image} alt={item.item_name} />
                <p className={styles.itemName}>{item.item_name} </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default WhatOnMindList;
