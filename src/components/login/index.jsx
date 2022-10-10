import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Login = () => {
    return (
        <>
            <div className="leftDiv"></div>

            <div className="rightDiv">

                <form className="form">
                    <h1>Login to continue</h1>

                    <input type="email" name="email" id="" placeholder="Email" />
                    <input type="password" name="password" id="" placeholder="password" />
                    <button type="submit">LOGIN</button>

                    <div className="flex">

                        <div>
                            <input type="checkbox" name="rememberMe" id="" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>

                        <a href="https://github.com/shehza-d/login">Forgot Password?</a>
                    </div>


                </form>
                <p>or sign up using</p>
                <div>
                    <a href="#"><BsFacebook /></a>
                    <a href="#"><AiFillTwitterCircle /></a>
                    <a href="#"><BsGithub /></a>


                </div>
            </div>
        </>
    );
}

export default Login;
