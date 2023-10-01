import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
          <div className="left">
            <h1>Lama Social</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc quis felis tristique, pulvinar libero vitae, viverra orci. 
            Nulla ut ligula vitae enim ultrices condimentum quis eu orci. 
            Curabitur hendrerit dolor sit amet mi auctor, in commodo libero semper.
            </p>
            <span>Do u have an account ?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
            
          </div>
          <div className="right">
            <h1>Register</h1>
            <form action="">
              <input type="text" placeholder="Username"/>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="text" placeholder="Name"/>
              <button>Register</button>
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default Register
