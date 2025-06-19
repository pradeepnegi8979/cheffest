import styles from "./socialmedia.module.css";
const CreatePost = () => {
  return (
    <>
      <div className={styles.formOuter}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="title"
          ></input>
          <textarea
            className="form-control mt-4"
            rows="6"
            placeholder="What's on your mind?"
          ></textarea>
          <button type="button" className="btn btn-primary mt-4">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePost;
