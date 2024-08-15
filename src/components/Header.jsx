import { navLinks } from "../lib/constants/data";

export default function Header() {
  return (
    <section className="bg-black text-white">
        <div className="flex justify-between">

        <div className="px-4 py-2">
        <a href="/">
        <img src="logo.jpg" alt="Ri5e company logo" height={50} width={50} />
        </a>
        </div>
        <div className="px-8"> 
            <nav className="h-full">
                <ul className="h-full">
                    {
                        navLinks.map((navlink) => (
                            <li key={navlink.link} className="flex-row content-center h-full">
                                <a href={navlink.link} className="hover:font-medium" >{navlink.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
        </div>
    </section>
  )
}
