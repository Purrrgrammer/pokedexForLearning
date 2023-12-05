import Detail from "@/components/Detail/Detail";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { name } = useParams();

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
      <Detail name={name} />
    </div>
  );
};

export default DetailPage;
