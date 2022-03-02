import React, { Component,useState, useEffect } from "react";
import axios from "axios";


function Home() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/typicode/demo/profile").then(response => {
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>{pokemon}</h1>
    </div>
  );
}

export default Home