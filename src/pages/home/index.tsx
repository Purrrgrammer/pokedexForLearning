import Nav from "@/components/Nav/Nav";
import Pagination from "@/components/Pagination/Pagination";
import {} from "@/components/SearchForm";
import SearchForm from "@/components/SearchForm/SearchForm";
import PokemonCard from "@/pokemoncard/PokemonCard";
import { usePokemonListStore } from "@/store/pokemonList";
import React, { useState } from "react";
// import { pokemonUser } from "@/services/internalService";
// import { RingLoader } from "react-spinners";
// import { Section, Title, Article, Prop, list } from "./generic";

//why you dont display the data within Home page
//form > store > home

//from store

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { pokemon, fetchPokemon } = usePokemonListStore();
  console.log(`pokemonasdasdasd ${pokemon}`);
  // const path = "pokemonoftheday";
  console.log("this is raw pokemon data", fetchPokemon);
  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      {/*  */}
      <Nav />
      <SearchForm pageNumber={pageNumber} />
      {/* {fetchPokemon.loading ? (
        <div className="h-[600px] flex justify-center items-center">
          <RingLoader color="#1976D2" size={300} />
        </div>
      ) : ( */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-[20px] mt-[40px]">
        {/* mapping raw pokemon data */}
        {!pokemon
          ? null
          : pokemon
              .data! // ?.filter((el) => el.vote!.score > 300)
              .map((item) => {
                return (
                  <React.Fragment key={`pokemon-${item.name}`}>
                    <PokemonCard
                      image={item.sprites.other.dream_world.front_default || ""}
                      name={item.name}
                      id={item.id}
                      types={item.types}
                      link={undefined}
                      loading={item.loading}
                    />
                  </React.Fragment>
                );
              })}
      </div>
      {/* )} */}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default HomePage;

{
  /* return <div key={`pokemon-${item.id}`}>
                    {item.name} */
}
