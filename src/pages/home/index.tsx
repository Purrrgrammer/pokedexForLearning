import {} from "@/components/SearchForm";
import SearchForm from "@/components/SearchForm/SearchForm";
import PokemonCard from "@/pokemoncard/PokemonCard";
import { usePokemonListStore } from "@/store/pokemonList";
import React from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
// import { Section, Title, Article, Prop, list } from "./generic";

//why you dont display the data within Home page
//form > store > home

//from store
const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();

  console.log("this is raw pokemon data", fetchPokemon);
  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      {/*  */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/pokemonoftheday">
            <div className="flex justify-center">
              <img
                src="/src/final front-end project resources/logo.webp"
                className="max-h-[80px] "
              />
            </div>
          </Link>
          <div className="flex items-center md:order-2">
            {/* aria-expanded="false"  */}
            <button
              type="button"
              onClick={() => {
                alert("GITHUB: PURRRGRAMMER");
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
              <li>
                {/* aria-current="page" */}
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  */}

      <SearchForm />
      {fetchPokemon.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <RingLoader color="#1976D2" size={300} />
        </div>
      )}
      {!fetchPokemon.loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-[20px] mt-[40px]">
          {/* mapping raw pokemon data */}
          {pokemon.data?.map((item) => {
            return (
              <React.Fragment key={`pokemon-${item.name}`}>
                <PokemonCard
                  image={item.sprites.other.dream_world.front_default || ""}
                  name={item.name}
                  id={item.id}
                  types={item.types}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;

{
  /* return <div key={`pokemon-${item.id}`}>
                    {item.name} */
}
