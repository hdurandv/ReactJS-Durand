import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListUser.css";

import { Link } from "react-router-dom";

import CardUser from "../CardUser/CardUser";

const ListUser = () => {
  const [chars, setChars] = useState([]);

  // callback || []
  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((json) =>
      setChars(json.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {chars.map((char) => {
        return (
          <div key={char.id}>
            <Link to={`/details/${char.id}`}>
              <CardUser data={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
