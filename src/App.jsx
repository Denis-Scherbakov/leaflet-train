import store from "./redux/store";
import { Provider } from "react-redux";
import { DeliveryModule } from "./components";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DeliveryModule />
      </div>
    </Provider>
  );
}

export default App;
