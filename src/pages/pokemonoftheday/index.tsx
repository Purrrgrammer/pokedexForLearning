import { useEffect, useState } from "react";
import { POKEMON_BASE_URL } from "@/util/constant";
import axios from "axios";
import Detail from "@/components/Detail/Detail";

import {
  IPokemonDetailResponse,
  // Ability,
  // Stat,
  // Type,
} from "@/interface/pokemonDetail";
import Logo from "@/components/Logo/Logo";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

export default function Pokemonoftheday() {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  let randomnumber = Math.floor(Math.random() * 1000 + 1);
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
  const path = "//";
  const { hours, minutes, seconds } = timer;
  return (
    <div>
      <Logo nav={path} />
      <Detail name={pokemon} /> {/* <poke</pok> */}
      <div>
        <h1>POKEMON OF THE DAY</h1>
        <div>Today is {new Date().toString()}</div>
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
          Surprise!
        </button>
      </div>
    </div>
  );
}

//PROBLEM pokemon name can be displayed but the other data cannot

//solution > only set pokemonData retrived from api then display it along only
