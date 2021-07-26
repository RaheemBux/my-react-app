import '../Login/Login.css';

const Login = () =>{
    return <div>
        <div className="center">
            <h2>Login Form</h2>
            <form className="loginForm">
                <input type="email" placeholder="Enter Email"></input><br></br><br></br>
                <input type="password" placeholder="Enter Password"></input>
            </form>
        </div>
    </div>
}
export default Login;