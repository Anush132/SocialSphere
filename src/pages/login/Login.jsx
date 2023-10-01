import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc quis felis tristique, pulvinar libero vitae, viverra orci. 
            Nulla ut ligula vitae enim ultrices condimentum quis eu orci. 
            Curabitur hendrerit dolor sit amet mi auctor, in commodo libero semper.
            </p>
            <span>Don't have an account ?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
