import { clearToken } from "@/token";
import { Link } from "react-router-dom";
const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png";

// "../../../public/pokedex resources/International_Pokémon_logo.svg.png";

const navpath = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
  { name: "user", path: "/user" },
  { name: "logout", path: "/" },
];
const Nav = () => {
  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg shadow-lg
"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-4 ">
        <Link to={"/pokemonoftheday"}>
          <div className="flex justify-center">
            <img src={logo} className="max-h-[80px] " />
          </div>
        </Link>{" "}
        <div className="flex items-center md:order-2">
          {/* aria-expanded="false"  */}
          <button
            type="button"
            onClick={() => {
              alert(
                "linkedin: woramjvic > https://www.linkedin.com/in/woramjvic/"
              );
            }}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/117668110?v=4"
              alt="purrrgrammer photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 hidden"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Woramongkol Vichayaworanan
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                woram.j.vic@gmail.com
              </span>
            </div>
            {/* aria-labelledby="user-menu-button" */}
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          {/* aria-controls="navbar-user" aria-expanded="false" */}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {/*  aria-hidden="true" */}
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                strokeWidth="currentColor 2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* main nav bar */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navpath.map((el, index) => (
              <li key={index}>
                {/* aria-current="page" */}
                <Link
                  to={el.path}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-700 md:bg-transparent md:text-blue-400 md:p-0 md:dark:text-blue-500"
                  onClick={() => {
                    if (el.name === "logout") {
                      clearToken();
                    }
                  }}
                >
                  {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
  {
    /*  */
  }
};

export default Nav;
