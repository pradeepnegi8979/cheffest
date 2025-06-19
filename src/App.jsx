// import NameList from "./NameList";
// import RandomNo from "./RandomNo";
import { Provider } from "react-redux";
import Todo from "./component/addtodo/ToDo";
import Footer from "./component/common/Footer";
// import Calculator from "./component/calculator/Calculator";
// import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
// import Fragments from "./component/fooditem2/Fragments";
import SocialMedia from "./component/socialmedia/SocialMedia";
import store from "./store/store";
import Swiggy from "./component/swiggy/Swiggy";

function App() {
  return (
    <>
      <Header />
      <Provider store={store}></Provider>
      <Swiggy />

      {/* <Header /> */}
      {/*
      <Footer />
     
      <NameList />
      <RandomNo />
      
   
     <Fragments /> 
       <Calculator />  
       */}
      {/* <Todo /> */}
      {/* <SocialMedia /> */}
      <Footer />
    </>
  );
}
export default App;
