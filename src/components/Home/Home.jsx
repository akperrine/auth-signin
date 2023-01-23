import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { logout } from "../../redux/features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const userObject = useSelector((state) => state.user.value);
  const userName = userObject.username.replace(/^\w/, (letter) =>
    letter.toUpperCase()
  );

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <h6 className="welcome">Welcome {userName}</h6>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
