import "./App.css";
import BikeSVG from "./SVGs/BikeSVG.svg";
import FbIcon from "./SVGs/FbIcon.svg";
import GoogleIcon from "./SVGs/GoogleIcon.svg";
import GithubIcon from "./SVGs/GithubIcon.svg";
import SSOButton from "./components/SSOButton";
import SmallText from "./components/SmallText";
import Link from "./components/Link";
import PrimaryLoginBtn from "./components/PrimaryLoginBtn";
import Input from "./components/Input";
import ForgotPassword from "./components/ForgotPassword";

function App() {
    return (
        <div className="bg-sky-200 z-50 h-screen w-screen col-center p-10">
            <div className="bg-white w-full overflow-hidden  py-10 center pl-40 rounded-xl border border-white shadow-sm shadow-gray-50 h-[480px]">
                <section className="space-y-2 h-full  col-start  z-50 w-2/5">
                    <p className="text-3xl pb-3 w-1/2 col-center text-gray-600 font-semibold font-sans">
                        Login
                    </p>

                    <div className="col-center space-y-4 w-full">
                        <Input name="email" text="Email" />
                        <Input name="password" text="Password" />
                    </div>

                    <div className="pl-20">
                        <ForgotPassword href="#" text="Forgot Password" />
                    </div>

                    <div className="col-center pt-5  w-full">
                        <PrimaryLoginBtn text="Sign in" />

                        <div className="col-start space-y-2">
                            <div className="pt-5 center w-full">
                                <SmallText text="or continue with" />
                            </div>

                            <div className="center w-full space-x-2">
                                <SSOButton alt={"FB"} src={FbIcon} />
                                <SSOButton alt={"Google"} src={GoogleIcon} />
                                <SSOButton alt={"Github"} src={GithubIcon} />
                            </div>

                            <div className="w-full space-x-1 pt-2 center ">
                                <SmallText text="Don't have an account yet?" />
                                <Link href="#" text="Register for free" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-3/5  relative col-end h-full">
                    <img
                        src={BikeSVG}
                        alt="Bike and Rider"
                        className="w-full z-0 col-end  h-[550px] absolute"
                    />
                </section>
            </div>
        </div>
    );
}

export default App;
