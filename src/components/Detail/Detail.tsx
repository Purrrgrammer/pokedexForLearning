import { pokemonDetailService } from "@/services/pokemonDetail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};
type propType = {
  name?: string | undefined;
};

const Detail = ({ name }: propType) => {
  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  const callData = async (name: string) => {
    const response = await pokemonDetailService.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data) {
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data?.sprites.other.dream_world.front_default ||
              response.data?.sprites.other["official-artwork"].front_default,
          },
          loading: true,
          error: null,
        });
      }
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (name) callData(name);
    console.log("name executed", name);
    // console.log(callData)
  }, [name]);

  return (
    <div className="detail-page w-[100%] m-[auto] max-w-[1500px] ">
      <div className="detail-page-base"></div>
      <div className="w-[100%] m-[auto] max-w-[1200px]">
        {/* This is card */}
        {/* NEWGRID */}
        <div className="pt-[50px] flex flex-col">
          {pokemon.data && (
            <div>
              <h1 className="capitalize mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name?.toUpperCase()}
              </h1>
              {/* type name */}
              <div>
                {pokemon.data.id < 9 ? (
                  <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    #00{pokemon.data.id}
                  </h1>
                ) : pokemon.data.id > 9 && pokemon.data.id < 99 ? (
                  <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    #0{pokemon.data.id}
                  </h1>
                ) : (
                  <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    #{pokemon.data.id}
                  </h1>
                )}
              </div>
              <div>
                {pokemon.data.types.map((type, index) => {
                  return (
                    <p
                      className={`badge-type-${type.type.name} px-[14px] capitalize py-1 w-full text-white font-semibold`}
                      key={`typo-${index}`}
                    >
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {pokemon.data && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
              {/* Abilities */}
              <div className="... order-2 sm:order-1">
                <h5 className="font-bold">Abilities</h5>
                <div className="grid grid-cols-2 sm:grid-cols-1 ">
                  {pokemon.data.abilities.map((item, index) => {
                    return (
                      <div className="capitalize" key={index}>{`${index + 1}. ${
                        item.ability.name
                      }`}</div>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  <p className="mx-2">
                    Height {(pokemon.data.height / 10).toFixed(2)} cm
                  </p>
                  <p className="mx-2">
                    Weight {(pokemon.data.weight / 10).toFixed(2)} kg
                  </p>
                </div>
                {/* <div>
                                    {pokemon.data.types.map(type => { return <p key={`${pokemon.data?.id}`}>{type.type.name}</p> })}
                                </div> */}
              </div>
              {/* POKEMON */}
              <div className="... order-1 md:order-2">
                <div>
                  <img
                    className="object-contain h-[300px] sm:h-[400px] p-8 sm:p-[40px] w-full hover:scale-110 transform transition duration-500"
                    src={pokemon.data.image}
                    alt=""
                  />
                </div>
              </div>
              {/* Stats */}
              <div className="... order-3">
                <h5 className="font-bold">Stats</h5>
                <div className="grid grid-cols-1 gap-1">
                  {pokemon.data.stats.map((item) => {
                    return (
                      <div
                        className="grid grid-cols-2 whitespace-nowrap my-2 "
                        key={`stat-name:${item.stat.name}`}
                      >
                        <div className=" text-blue-400 font-semibold capitalize mx-3 text-right ">
                          {item.stat.name}
                        </div>
                        <div className="container w-[60%] bg-black justify-self-left rounded-md ">
                          <div
                            className="stat bg-blue-400 text-left text-white pl-1 	"
                            style={{
                              width: `${(item.base_stat / 180) * 100}%`,
                            }}
                          >
                            {item.base_stat}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <b>Overall</b>
                  <div className="container w-[80%] bg-black justify-self-center rounded-md">
                    <div
                      className="stat bg-blue-400 text-middle text-white whitespace-nowrap"
                      style={{
                        width: `${
                          (pokemon.data.stats.reduce(
                            (pre, cur) => pre + cur.base_stat,
                            0
                          ) /
                            (180 * 6)) *
                          100
                        }%`,
                      }}
                    >
                      {`${(
                        (pokemon.data.stats.reduce(
                          (pre, cur) => pre + cur.base_stat,
                          0
                        ) /
                          (180 * 6)) *
                        100
                      ).toFixed(2)} %`}
                      {/* pre act as initial value */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Link to={"/"} className="m-4">
        <div className="font-bold">BACK</div>
      </Link>
    </div>
  );
};

export default Detail;
