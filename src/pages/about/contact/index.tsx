import Nav from "@/components/Nav/Nav";
import PokemonCard from "@/pokemoncard/PokemonCard";

const ContactPage = () => {
  const contact = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      name: "github",
      id: 123,
      link: "https://github.com/Purrrgrammer",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      name: "linkedin",
      id: 123,
      link: "https://www.linkedin.com/in/woramjvic/",
    },
    {
      image:
        "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/408049528_319678234307003_2558567712208924451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Tb_mt6bfsycAX8-1Vzp&_nc_ht=scontent.fbkk8-2.fna&oh=00_AfBpGqPGzcgLMzAhrsJPgNL-vR7QpbqEf1_GYXRFRrxmEw&oe=65748709",
      name: "wv",
      id: 123,
      link: "https://johnwv.pages.dev/",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-[20px] mt-[40px]">
        {contact.map((el) => (
          <PokemonCard
            image={el.image}
            name={el.name}
            id={el.id}
            types={undefined}
            link={el.link!}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
