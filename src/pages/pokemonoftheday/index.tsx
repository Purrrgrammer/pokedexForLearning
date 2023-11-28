import { useEffect, useState } from "react";
import { POKEMON_BASE_URL } from "@/util/constant";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Ability,
  IPokemonDetailResponse,
  Stat,
  Type,
} from "@/interface/pokemonDetail";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

export default function Pokemonoftheday() {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  let randomnumber = Math.floor(Math.random() * 100 + 1);
  const [pokemon, setPokemon] = useState<any>("");
  const [_pokemonData, setPokemonData] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  const [pokemonNum, setPokemonNum] = useState<number>(randomnumber);
  // const [max, setmax] = useState<number>(1);

  const callRandom = async () => {
    //151
    const result = await axios.get(`${POKEMON_BASE_URL}/pokemon/${pokemonNum}`);
    const findmax = await axios.get(`${POKEMON_BASE_URL}/pokemon/`);
    console.log("result.data", result);
    try {
      if ((result.status = 200)) {
        setPokemonData({
          data: {
            ...result.data,
            image:
              result.data?.sprites.other.dream_world.front_default ||
              result.data?.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
      }
      console.log("findmax", findmax.data.count);
      setPokemon(result.data.species.name);
      console.log("pokemon", pokemon);
      //data.length to ask
    } catch (error) {
      console.log(error);
    }
  };
  const getCountDown = () => {
    let today = new Date();
    let tmr = new Date();
    tmr.setDate(today.getDate() + 1);
    tmr.setHours(0, 0, 0, 0);
    let timeleft = tmr.getTime() - today.getTime();
    // let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (timeleft < 0) {
      setPokemonNum(randomnumber);
    }
    return { hours, minutes, seconds };
  };

  useEffect(() => {
    callRandom();
    // console.log('pokemonData', pokemonData.data)
  }, [pokemonNum]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      getCountDown();
      let result = getCountDown();
      setTimer(result);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timer]);

  const { hours, minutes, seconds } = timer;
  return (
    <div>
      <Link to="/">
        <div className="flex justify-center">
          <img
            src="/src/final front-end project resources/logo.webp"
            className="max-h-[80px] mt-[20px]"
          />
        </div>
      </Link>

      <h1>POKEMON OF THE DAY</h1>
      <div>Today is {new Date().toString()}</div>
      <h1>{pokemon}</h1>
      <div className="countDownSection flex flex-col items-center ">
        <div>The Pokemon will be automatically reset </div>
        in
        <div className="timeContainer flex flex-row self-center m-2">
          <div className="timeSection mx-2 text-5xl">
            <div>{hours < 10 ? "0" + hours : hours}</div>
            <div className="text-xs">hrs</div>
          </div>
          <div className="timeSection mx-2 text-5xl">
            <div>{minutes < 10 ? "0" + minutes : minutes}</div>
            <div className="text-xs">min</div>
          </div>
          <div className="timeSection mx-2 text-5xl">
            <div>{seconds < 10 ? "0" + seconds : seconds}</div>
            <div className="text-xs">hrs</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setPokemonNum(randomnumber);
        }}
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Alternative
      </button>

      {/* <poke</pok> */}
      <div className="w-[100%] m-[auto] max-w-[1500px] ">
        <div className="w-[100%] m-[auto] max-w-[1200px]">
          {/* This is card */}
          {/* NEWGRID */}
          <div className="pt-[50px]">
            {pokemon.data && (
              <div>
                <h1 className="capitalize mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {pokemon.data.name?.toUpperCase()!}
                </h1>
                {/* type name */}
                <div>
                  {pokemon.data.types.map((type: Type) => {
                    return (
                      <p
                        className={`badge-type-${type.type.name} px-[14px] capitalize py-1 w-full text-white font-semibold`}
                        key={`typo-${pokemon.data?.id}`}
                      >
                        {type.type.name}
                      </p>
                    );
                  })}
                </div>
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
              </div>
            )}
            {pokemon.data && (
              <div className="grid grid-cols-3 gap-5 ">
                {/* Abilities */}
                <div className="...">
                  <h5 className="font-bold">Abilities</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-1 ">
                    {pokemon.data.abilities.map(
                      (item: Ability, index: number) => {
                        return (
                          <div
                            className="capitalize"
                            key={pokemon.data?.id}
                          >{`${index + 1}. ${item.ability.name}`}</div>
                        );
                      }
                    )}
                  </div>
                  <div>
                    <p>Height {(pokemon.data.height / 10).toFixed(2)} cm</p>
                    <p>Weight {(pokemon.data.weight / 10).toFixed(2)} kg</p>
                  </div>
                  <div>
                    {pokemon.data.types.map((type: Type) => {
                      return (
                        <p key={`${pokemon.data?.id}`}>{type.type.name}</p>
                      );
                    })}
                  </div>
                </div>
                {/* POKEMON image*/}
                <div className="...">
                  <div>
                    <img
                      className=" h-[400px] p-[40px] w-full hover:scale-110 transform transition duration-500"
                      src={pokemon.data.image}
                      alt=""
                    />
                  </div>
                </div>
                {/* Stats */}
                <div className="...">
                  <h5 className="font-bold">Stats</h5>
                  <div className="grid grid-cols-1 gap-1">
                    {pokemon.data.stats.map((item: Stat) => {
                      return (
                        <div className="grid grid-cols-2 ">
                          <div className=" text-blue-400 font-semibold capitalize mx-3 text-right">
                            {item.stat.name}
                          </div>
                          <div className="container w-[60%] bg-black justify-self-left">
                            <div
                              className="stat bg-blue-400 text-left text-white pl-1 "
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
                    <div className="container w-[80%] bg-black justify-self-center">
                      <div
                        className="stat bg-blue-400 text-middle text-white"
                        style={{
                          width: `${
                            (pokemon.data.stats.reduce(
                              (pre: number, cur: any) => pre + cur.base_stat,
                              0
                            ) /
                              (180 * 6)) *
                            100
                          }%`,
                        }}
                      >
                        {`${(
                          (pokemon.data.stats.reduce(
                            (pre: number, cur: any) => pre + cur.base_stat,
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
          <Link to={"/"}>
            <b className="text-bold">BACK</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

//PROBLEM pokemon name can be displayed but the other data cannot

//solution > only set pokemonData retrived from api then display it along only
