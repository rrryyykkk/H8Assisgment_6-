import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./pages/Header";
import Movies from "./pages/Movies";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const OMDB_URL = import.meta.env.VITE_OMDB_BASE_URL;

  console.log(API_KEY);
  console.log(OMDB_URL);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch(`${OMDB_URL}/?apikey=${API_KEY}&s=fast`);
        const result = await response.json();
        console.log(result.Search);
        setMovies(result.Search);
        setFilteredMovies(result.Search);
      } catch (error) {
        console.log("error: ", error.message);
      }
    };
    data();
  }, [API_KEY, OMDB_URL]);

  useEffect(() => {
    const filtered = movies.filter((film) =>
      film.Title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchTerm]);

  return (
    <Box>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => {}}
      />
      <Movies movies={filteredMovies} />
    </Box>
  );
}

export default App;
