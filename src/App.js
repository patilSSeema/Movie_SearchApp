import styled from "styled-components";
import MovieCom from "./Components/MovieCom";
import { useState } from "react";
import axios from "axios";
import MovieInfo from "./Components/MovieInfo";

const API_KEY = "4b5a7e74";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  align-items: center;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieIcon = styled.img`
  width: 46px;
  height: 30px;
  // margin: 15px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  // color: white;
  padding: 10px 10px;
  border-radius: 20px;
  margin-left: 20px;
  width: 50%;
  align-items: center;
  // cursor: pointer;
`;
const SearchIcon = styled.img`
  width: 46px;
  height: 30px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  // color: white;
  padding: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
`;

function App() {
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [movieList, setMovielist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData = async (searchString) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(res);
    setMovielist(res.data.Search);
  };

  const textInputChange = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const newTimeoutId = setTimeout(() => {
      fetchData(e.target.value);
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieIcon src="/cil-movie-white.svg" />
          Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={search}
            onChange={textInputChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfo selectedMovie={selectedMovie} />}
      <MovieListContainer>
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieCom
                key={index}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
              />
            ))
          : "No Movie Found"}
      </MovieListContainer>
    </Container>
  );
}

export default App;
