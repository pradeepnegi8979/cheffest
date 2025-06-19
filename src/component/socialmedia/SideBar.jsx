import styles from "./socialmedia.module.css";

import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const SideBar = ({ selectedTab, setSelectedTab }) => {
  // const handleOnCLick = (tabName) => {
  //   setSelectedTab(tabName);
  // };
  return (
    <>
      <div className={styles.sidebarOuter}>
        <ul>
          <li
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            <a
              href="javascript:void(0);"
              className={`sidebar  ${
                selectedTab === "home" && styles.activeLi
              }`}
            >
              <FaHome /> Home
            </a>
          </li>
          <li onClick={() => setSelectedTab("create post")}>
            <a
              href="javascript:void(0);"
              className={`sidebar ${
                selectedTab === "create post" && styles.activeLi
              }`}
            >
              <IoMdMail />
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
