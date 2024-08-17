import { Link, useNavigate } from "react-router-dom";
import { navLinks, productOwnerNavLinks } from "../../lib/constants/data";
import MobDropdown from "./MobDropdown";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Parth",
    token: "",
    isProductOwner: true,
  });
  return (
    <section className="bg-black text-white">
      <div className="flex justify-between">
        <div className="px-4 py-2">
          <a href="/">
            <img
              src="/logo.jpg"
              alt="Ri5e company logo"
              height={80}
              width={80}
            />
          </a>
        </div>
        <div className="px-8 hidden sm:block">
          <nav className="h-full">
            <ul className="flex gap-8 h-full text-2xl">
              {user.name === "" &&
                navLinks.map((navlink) => (
                  <li key={navlink.link} className="content-center h-full">
                    <Link to={navlink.link} className="hover:font-medium">
                      {navlink.title}
                    </Link>
                  </li>
                ))}
              {user.name !== "" &&
                user.isProductOwner &&
                productOwnerNavLinks.map((navlink) => (
                  <li key={navlink.link} className="content-center h-full">
                    <Link to={navlink.link} className="hover:font-medium">
                      {navlink.title}
                    </Link>
                  </li>
                ))}
              {user.name !== "" && !user.isProductOwner && (
                <li className="content-center h-full">
                  <Link to="/mentor/inbox" className="hover:font-medium">
                    Inbox
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="p-4 self-center">
          {user.name === "" ? (
            <PrimaryButton
              name="Login"
              className="bg-white text-black font-semibold py-2 px-6 rounded transition hover:bg-gray-300"
              handleClick={() => {
                navigate("/login");
              }}
            />
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-center">{user.name}</p>
              <PrimaryButton
                name="My Profile"
                className="bg-white text-black font-semibold p-1 rounded transition hover:bg-gray-300"
                handleClick={() => {
                  navigate(
                    user.isProductOwner ? "/product-profile" : "/mentor-profile"
                  );
                }}
              />
            </div>
          )}
        </div>
        <MobDropdown />
      </div>
    </section>
  );
}
