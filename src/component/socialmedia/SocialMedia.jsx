import { useState } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import SideBar from "./SideBar";
import styles from "./socialmedia.module.css";

function SocialMedia() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <div className="container">
        <div className={`row ${styles.mt50}`}>
          <div className="col-3">
            <SideBar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="col-9">
            {selectedTab === "home" ? <PostList /> : <CreatePost />}
          </div>
        </div>
      </div>
    </>
  );
}
export default SocialMedia;
