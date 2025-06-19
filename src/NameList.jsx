function NameList() {
  let myName = "Pradeep";
  let Number = 8979670504;
  let fullName = () => {
    return "Pradeep negi";
  };
  return (
    <h1>
      This is {myName}, {fullName()} and my no is {Number}
    </h1>
  );
}
export default NameList;
