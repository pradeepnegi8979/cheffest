import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./component/common/Header";
import Swiggy from "./component/swiggy/Swiggy";
import Footer from "./component/common/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Swiggy />
      <Footer />
    </Provider>
  );
}

export default App;
