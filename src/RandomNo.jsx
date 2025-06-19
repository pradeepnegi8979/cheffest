function RandomNo() {
  let number = Math.random() * 100;
  return (
    <div className="container mb-5">
      <div
        className="outer"
        style={{ background: "#fafafa", padding: "15px", borderRadius: "10px" }}
      >
        <h1
          style={{ background: "#f6f6f6", padding: "15px", fontSize: "14px" }}
        >
          The Random number is {Math.round(number)}
        </h1>
        <button type="button" className="btn btn-primary mt-3">
          submit
        </button>
      </div>
    </div>
  );
}
export default RandomNo;
