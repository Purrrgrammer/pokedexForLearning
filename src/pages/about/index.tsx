import Nav from "@/components/Nav/Nav";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <div className="typewriter ">
        <p>
          Pokemon Basic Information Service which all the data queried from
          pokeAPI, using ReactJS, Tailwind CSS Framework, and Zustand for state
          management. project.
        </p>
        <p>
          The Project consist Home Page for displaying all the fetched data. To
          find the pokemon use search and sort bar for the name, generation, and
          ID.
        </p>
        <p>
          Moreover, when you have clicked one of the cards it will navigate you
          to Detail Page which is the page that display the details of the
          pokemon.
        </p>
        <p>
          About Page which you are currnetly on is the page that display
          information/instruction about this project.
        </p>
        <p>
          *there is a hidden feature, try clicking on the logos in different
          pages
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
