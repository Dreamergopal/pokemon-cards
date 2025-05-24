import React, { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/aggron";

  // const fetchFunc = () => {
  //   setTimeout(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(!loading);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //         setLoading(!loading);
  //       });
  //   }, 2000);
  // };

  // useEffect(() => {
  //   fetchFunc();
  // }, []);

  // console.log(data);

  const pokemonFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setData(data);
      setLoading(!loading);
    } catch (err) {
      setError(err.message);
      setLoading(!loading);
    }
  };

  useEffect(() => {
    pokemonFetch();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Pokemon is Loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>error: {error.message}</h1>
      </div>
    );
  }

  return (
    <section>
      <header>lets catch pokemon</header>
      <ul>
        <li>
          <figure>
            <img
              src={data?.sprites?.other?.dream_world?.front_default}
              alt={data.name}
            />
          </figure>
          <h1>{data.name}</h1>
        </li>
      </ul>
    </section>
  );
}

export default ApiCall;


// in this file i was working to understand the drilling process of API. 
// by which i can complete the project.
// its just my start to learn the concepts.
// ignore this file, i put it in my repo just because to show that how i got the idea or to explore the process of learning from doing.
