import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
  const [chars, setChars] = useState([]);

  console.log("chars", chars);

  let { speciesId } = useParams();

  let filteredCharacters = chars.filter((char) => {
    return char.species === speciesId;
  });

  // console.log(filteredCharacters);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((json) =>
      setChars(json.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <CardUser data={char} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
