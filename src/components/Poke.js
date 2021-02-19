import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getPokemon, getAllPokemon } from '../components/Dex';
import {Spinner, Container, Pagination }from 'react-bootstrap'



function PokeApp() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0'

  

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
     <Container>
        {loading ? <Spinner animation="border" variant="danger" /> :(
          <>
            
            <Container>
              {pokemonData.map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />
              })}
            </Container>
            <Container >
            <Pagination size="lg">
            <Pagination.Prev onClick={prev}/>
            <Pagination.Next onClick={next}/>
            </Pagination>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default PokeApp;