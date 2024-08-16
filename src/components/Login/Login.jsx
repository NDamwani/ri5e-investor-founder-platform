import { useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import Input from "../common/Input";
import LoginOpt from "./LoginOpt";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);
  const [isMentor, setIsMentor] = useState("");

  const handleSecondaryButtonClick = () => {
    setRegister(!register);
  };

  const primaryButtonClass =
    "bg-white text-black font-semibold py-2 px-6 rounded transition hover:bg-gray-300 w-full my-2";
  const secondaryButtonClass =
    "bg-transparent border border-white text-white font-semibold py-2 px-6 rounded transition hover:bg-gray-300 hover:text-black w-full my-2";

  return (
    <section className="h-screen flex flex-col justify-center content-center gap-y-4">
      <div className="self-center">
        <Link to="/">
          <img
            src="logo.jpg"
            alt="company logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
          />
        </Link>
      </div>
      {isMentor === "" ? (
        <LoginOpt updateLoginInfo={setIsMentor} />
      ) : (
        <div className="p-8 flex justify-center items-center">
          <div className="min-w-80">
            <h1 className="text-4xl font-bold text-center">
              {register ? "Register" : "Login"}
              {isMentor === "mentor"
                ? " as Mentor"
                : isMentor === "productOwner"
                ? " as Product Owner"
                : ""}
            </h1>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {register && (
                <Input label="Full Name" type="text" id="full-name" />
              )}
              <Input label="Email" type="email" id="email" />
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
              />
              {register && (
                <>
                  <Input
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                  />
                </>
              )}
              <div className="flex">
                <label htmlFor="show-password" className="mr-4">
                  Show Password
                </label>
                <input
                  type="checkbox"
                  id="show-password"
                  name="show-password"
                  className="p-2 rounded-md accent-[#1a1a1a]"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className="px-6">
                {register ? (
                  <>
                    <PrimaryButton
                      name="Register"
                      type="submit"
                      className={primaryButtonClass}
                    />
                    <SecondaryButton
                      name={"Already signed up? Login here"}
                      handleClick={handleSecondaryButtonClick}
                      className={secondaryButtonClass}
                    />
                    <SecondaryButton
                      name={"Go back to login options"}
                      handleClick={() => {
                        setIsMentor("");
                        setRegister(false);
                      }}
                      className={secondaryButtonClass}
                    />
                  </>
                ) : (
                  <>
                    <PrimaryButton
                      name="Login"
                      type="submit"
                      className={primaryButtonClass}
                    />
                    <SecondaryButton
                      name={"Not signed up? Register here"}
                      handleClick={handleSecondaryButtonClick}
                      className={secondaryButtonClass}
                    />
                    <SecondaryButton
                      name={"Go back to login options"}
                      handleClick={() => setIsMentor("")}
                      className={secondaryButtonClass}
                    />
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}