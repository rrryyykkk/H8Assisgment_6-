import { Container, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/Product";
import { useColorModeValue } from "../components/ui/color-mode";
import PropTypes from "prop-types";

const Movies = ({ movies }) => {
  const textColor = useColorModeValue("blue.600");

  return (
    <>
      <Container>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Heading size={"3xl"} color={textColor}>
            Show Your Favorit Movies
          </Heading>
        </HStack>
        <SimpleGrid columns={[2, null, 3]} gap="20px" paddingTop={5}>
          {movies.length > 0 ? (
            movies.map((film) => (
              <ProductCard
                key={film.imdbID}
                title={film.Title}
                poster={film.Poster}
              />
            ))
          ) : (
            <Heading>No Movies Found</Heading>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Movies;
