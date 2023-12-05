import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type iPath = { nav: "/" | "/pokemonoftheday" | string };

const Logo = (path: iPath) => {
  const logo = "../../../public/pokedex resources/logo.webp";
  const [user, setUser] = useState(path || "pokemonoftheday");

  useEffect(() => {
    axios.get(`${path}`).then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <Link
      to={`/${JSON.stringify(user)
        .replace(/[^a-zA-Z]+/g, "")
        .replace("nav", "")}`}
    >
      <div className="flex justify-center">
        <img src={logo} className="max-h-[80px] " />
      </div>
    </Link>
  );
};

export default Logo;
