import "./App.css";
import Signin from "./components/Signin/Signin";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";

function App() {
  const user = useSelector((state) => state.user.value);

  return <div className="App">{user ? <Home /> : <Signin />}</div>;
}

export default App;
