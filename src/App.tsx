import React, { useState } from 'react';
import {Wrapper, Row, Header, Image, Form, Search, Button} from "./components/styled"
import owl from "./images/owl.svg"
import axios from "axios"
import JokeItem from "./components/JokeItem"
import {Joke, Flag} from "./common/types"



const BASE_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
function App() {
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)
  const [jokes, setJokes] = useState<Joke[]>([])

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
    setSearch(event.target.value)
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const ENDPOINT = `${BASE_URL}&contains=${search}`
    const {data} = await axios.get(ENDPOINT)
    if(data.error){
      setError(true);
      setJokes([])
    }else{
      setError(false)
      setJokes(data.jokes)
    }
    setSearch("")
  }
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joke</Header>
          <Image src={owl} alt=""/>
        </Row>
        <Form onSubmit={getJokes}>
          <Search type="text" placeholder="search..." value={search} onChange={handleChange} />
          <Button type="submit">Submit</Button>
        </Form>

        <div>
          {error && <p>Sorry, no jokes found.</p>}
          {jokes.length > 0 && jokes.map(joke => <JokeItem key = {joke.id} joke={joke}/>)}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
