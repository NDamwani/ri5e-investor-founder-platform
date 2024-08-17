import { useState } from "react";
import SecondaryButton from "../common/SecondaryButton";
import LoginOpt from "./LoginOpt";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  //todo make confirmPassword and name required on register page
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      name: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section
      className={`flex flex-col justify-center content-center gap-y-4 ${
        register ? "" : "h-screen"
      }`}
    >
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
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              {register && (
                <div>
                  <label htmlFor="fullName" className="block text-2xl">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="p-2 my-2 w-full border-gray-300 rounded-md bg-accent"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-2xl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="p-2 my-2 w-full border-gray-300 rounded-md bg-accent"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="block text-2xl">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="p-2 my-2 w-full border-gray-300 rounded-md bg-accent"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              {register && (
                <>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-2xl">
                      Confirm Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      className="p-2 my-2 w-full border-gray-300 rounded-md bg-accent"
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>
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
                    <button className={primaryButtonClass} type="submit">
                      Register
                    </button>
                    <SecondaryButton
                      name={"Already signed up? Login here"}
                      handleClick={handleSecondaryButtonClick}
                      className={secondaryButtonClass}
                      type={"button"}
                    />
                    <SecondaryButton
                      name={"Go back to login options"}
                      handleClick={() => {
                        setIsMentor("");
                        setRegister(false);
                      }}
                      type={"button"}
                      className={secondaryButtonClass}
                    />
                  </>
                ) : (
                  <>
                    <button className={primaryButtonClass} type="submit">
                      Login
                    </button>
                    <SecondaryButton
                      name={"Not signed up? Register here"}
                      handleClick={handleSecondaryButtonClick}
                      className={secondaryButtonClass}
                      type={"button"}
                    />
                    <SecondaryButton
                      name={"Go back to login options"}
                      handleClick={() => setIsMentor("")}
                      className={secondaryButtonClass}
                      type={"button"}
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
