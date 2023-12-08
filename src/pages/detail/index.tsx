import Detail from "@/components/Detail/Detail";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { name } = useParams();
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png";

  // "../../../public/pokedex resources/International_Pokémon_logo.svg.png";
  return (
    <div>
      <Link to="/">
        <div className="flex justify-center">
          <img src={logo} className="max-h-[80px] " />
        </div>
      </Link>
      <Detail name={name} />
    </div>
  );
};

export default DetailPage;
