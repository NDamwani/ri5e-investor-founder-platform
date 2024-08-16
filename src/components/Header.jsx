import { Link } from "react-router-dom";
import { navLinks } from "../lib/constants/data";
import MobDropdown from "./MobDropdown";

export default function Header() {
  return (
    <section className="bg-black text-white">
      <div className="flex justify-between">
        <div className="px-4 py-2">
          <a href="/">
            <img
              src="logo.jpg"
              alt="Ri5e company logo"
              height={80}
              width={80}
            />
          </a>
        </div>
        <div className="px-8 hidden sm:block">
          <nav className="h-full">
            <ul className="flex gap-8 h-full text-2xl">
              {navLinks.map((navlink) => (
                <li key={navlink.link} className="content-center h-full">
                  <Link to={navlink.link} className="hover:font-medium">
                    {navlink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <MobDropdown />
      </div>
    </section>
  );
}
