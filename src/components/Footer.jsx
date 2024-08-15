import { footerLinks } from "../lib/constants/data";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center">
      <div className="flex flex-col p-4">
        <p className="text-2xl font-semibold mb-2">Ri5e</p>
        <hr className="bg-white/20 h-1 rounded-xl w-[90%] self-center" />
      </div>
      <div className="flex p-4 justify-center gap-x-12">
        <div className="flex justify-center">
          <ul>
            {footerLinks.map((footerLink) => (
              <li key={footerLink.link} className="p-2 hover:font-medium hover:scale-110 active:scale-105">
                <a href={footerLink.link}>{footerLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* if required */}
        {/* <div className="flex justify-center">
          <ul>
            {footerLinks.map((footerLink) => (
              <li key={footerLink.link} className="p-2 hover:font-medium hover:scale-110 active:scale-105">
                <a href={footerLink.link}>{footerLink.title}</a>
              </li>
            ))}
          </ul>
      
        </div> */}
      </div>
      <div className="p-4 flex flex-col justify-center">
        <hr className="bg-white/20 h-1 rounded-xl w-[90%] self-center my-2" />
        <p className="text-xs text-white/50 font-medium">
          {" "}
          &copy;{Date().split(" ")[3]} Ri5e. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
