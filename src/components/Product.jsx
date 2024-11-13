import { CardFooter, CardRoot, Heading, Image } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import PropTypes from "prop-types";

const ProductCard = ({ title, poster }) => {
  const cardColor = useColorModeValue("blue.700", "blue.300");
  const textColor = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <CardRoot size={"sm"} bgColor={cardColor}>
        <Image
          rounded={"sm"}
          src={poster}
          alt={title}
          height={48}
          width={"full"}
        />
        <CardFooter justifyContent={"center"}>
          <Heading marginTop={"3"} size={"2xl"} color={textColor}>
            {title}
          </Heading>
        </CardFooter>
      </CardRoot>
    </>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default ProductCard;
