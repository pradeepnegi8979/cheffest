import { useLocation } from "react-router-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import styles from "./fooddelivery.module.css";
import FoodDetailsList from "./FoodDetailsList";
//import restaurantList from "./MockData";
import hotelList from "./HotelList";
import FoodMenu from "./FoodMenu";

const FoodDetails = () => {
  let uselocation = useLocation();
  let currentId = uselocation.pathname.split("/")[1];
  let currentData = hotelList?.find((item) => item.id == currentId);
  // let locationHotel = hotelList?.find(
  //   (item) => item.hotel_location == currentId
  // );

  return (
    <>
      <Header />
      <div className={styles.detailPage}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className={styles.detailbreacumb}>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">{currentData.hotel_location}</a>
                  </li>
                  <li>{currentData.hotel_name}</li>
                </ul>
              </div>
              <FoodDetailsList currentData={currentData} />
              <FoodMenu currentData={currentData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FoodDetails;
