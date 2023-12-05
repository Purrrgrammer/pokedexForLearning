import Detail from "@/components/Detail/Detail";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { name } = useParams();
  const logo = "../../../public/pokedex resources/logo.webp";
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
