import Next from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiHiveBlockchain } from "react-icons/si";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const links: { path: string; title: string }[] = [
    { path: "/", title: "Home" },
    { path: "/library", title: "Library" },
    { path: "/play-ground", title: "Playground" },
  ];

  const routePath: string = useRouter().pathname;

  return (
    <>
      <header className="flex items-center h-14 px-5 ">
        <SiHiveBlockchain className="text-color-dark-blue mr-2 w-6 h-6" />
        <a className="text-color-dark-blue text-2xl font-bold tracking-wide">
          BLOCKVIEW
        </a>
        <nav className="ml-auto">
          <ul className="flex items-center ">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className={`ml-4 text-lg  ${
                    routePath === item.path
                      ? "text-color-dark-blue-2"
                      : "text-[#84A9AC]"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
