import styles from "../food-delivery/foodmenu.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { useState } from "react";

const AddressData = () => {
  const addressList = [
    {
      id: "01",
      locationArea: "Home",
      address: [
        {
          addressId: "01",
          addressLineFirst: "Floor 1, 3/197,",
          addressLineSecond:
            "Resettlement Colony, Khichripur Village, Kalyan Puri,",
          addressLineSFour: "New Delhi",
          addressLineFive: "Delhi 110091, India",
        },
      ],
      delTime: "51M",
    },
    {
      id: "02",
      locationArea: "Office",
      address: [
        {
          addressId: "02",
          addressLineFirst: "Floor 1, 3/197,",
          addressLineSecond:
            "Resettlement Colony, Khichripur Village, Kalyan Puri,",
          addressLineSFour: "New Delhi",
          addressLineFive: "Delhi 110091, India",
        },
      ],
      delTime: "35M",
    },
    {
      id: "03",
      locationArea: "Shop",
      address: [
        {
          addressId: "03",
          addressLineFirst: "Floor 1, 3/197,",
          addressLineSecond:
            "Resettlement Colony, Khichripur Village, Kalyan Puri,",
          addressLineSFour: "New Delhi",
          addressLineFive: "Delhi 110091, India",
        },
      ],
      delTime: "45M",
    },
    {
      id: "04",
      locationArea: "PG",
      address: [
        {
          addressId: "04",
          addressLineFirst: "Floor 1, 3/197,",
          addressLineSecond:
            "Resettlement Colony, Khichripur Village, Kalyan Puri,",
          addressLineThird: "New Delhi",
          addressLineFour: "Delhi 110091, India",
        },
      ],
      delTime: "21M",
    },
  ];
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const handleSelectAddress = (id) => {
    setSelectedAddressId(id); // Update selected address
    alert(`Address with ID ${id} selected`);
  };
  return (
    <>
      <div className={styles.accountouter}>
        <ul>
          <li className={styles.mainOuter}>
            <div className={styles.accicon}>
              <IoLocationOutline />
            </div>
            <div className={styles.acouter}>
              <h4>Choose a delivery address</h4>
              <h6>Multiple addresses in this location</h6>
              <div className={styles.addListOuter}>
                {addressList
                  .filter(
                    (list) =>
                      selectedAddressId === null ||
                      list.id === selectedAddressId
                  )
                  .map((list) => (
                    <div
                      className={`${styles.addRess} ${
                        selectedAddressId === list.id
                          ? styles.selected
                          : "unselected"
                      }`}
                      key={list.id}
                    >
                      <div>
                        <IoHomeOutline />
                      </div>
                      <div>
                        <h3> {list.locationArea} </h3>
                        {list.address.map((address) => (
                          <h5 key={address.addressId}>
                            {address.addressLineFirst}
                            {address.addressLineSecond}
                            {address.addressLineThird}
                            {address.addressLineFour}
                          </h5>
                        ))}
                        <p>{list.delTime}</p>
                        <button
                          type="btn"
                          className={styles.deliverBtn}
                          onClick={() => handleSelectAddress(list.id)}
                        >
                          {" "}
                          Deliver here{" "}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </li>

          <li className={styles.mainOuter}>
            <div className={styles.accicon}>
              <IoWalletOutline />
            </div>
            <div className={styles.acouter}>
              <h4>Payment</h4>
              <div className="paymentOpt">
                <h5>Choose payment method</h5>
                <button type="button" className={styles.proceedBtn}>
                  Proceed to Pay
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default AddressData;
