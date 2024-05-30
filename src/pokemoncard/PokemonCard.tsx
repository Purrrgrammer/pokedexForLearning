import { Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types?: Type[] | any;
  link?: string | undefined;
  loading?: boolean;
}
//construct few data

/* old => 
interface PokemonCardProps {
    data= IPokemonDetailResponse
}

export function pokemonCard({ data }: PokemonCardProps) 
*/
export function pokemonCard({
  image,
  name,
  id,
  types,
  link,
  loading,
}: PokemonCardProps) {
  console.log(`loading, ${loading}`);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="rounded-[20px] overflow-hidden max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[275px] h-full max-h-[350px] w-full m-[auto] hover:scale-110 transform transition duration-500">
          {link === undefined ? (
            <Link to={`/detail/${name}`}>
              <img
                className="rounded-t-lg max-h-[218px] h-full p-[40px] w-full object-contain"
                src={image}
              />
            </Link>
          ) : (
            <a href={link} target="_blank">
              <img
                className="rounded-t-lg max-h-[218px] h-full p-[40px] w-full object-contain"
                src={image}
              />
            </a>
          )}
          <div className="pb-5">
            <div className="flex justify-between">
              <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name.toUpperCase()}
              </h5>
              {id < 9 ? (
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  #00{id}
                </h5>
              ) : id > 9 && id < 99 ? (
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  #0{id}
                </h5>
              ) : (
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  #{id}
                </h5>
              )}
            </div>
            {/* text */}
            <div className="flex gap-1 justify-center mt-[16px] ">
              {types?.map((item: any) => {
                return (
                  <span
                    key={`type-${item.type.name}`}
                    // try  appling fade x to background
                    className={`badge-type-${item.type.name} px-[14px] capitalize py-1 w-full text-white font-semibold`}
                  >
                    {item.type.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default pokemonCard;
