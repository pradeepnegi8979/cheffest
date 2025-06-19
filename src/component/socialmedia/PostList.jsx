import styles from "./postlist.module.css";
import PostData from "./PostData";

const PostList = () => {
  return (
    <>
      <div className={styles.postDataOuter}>
        <PostData />
        <PostData />
        <PostData />
        <PostData />
      </div>
    </>
  );
};
export default PostList;
