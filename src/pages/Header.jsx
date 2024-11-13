import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
import PropTypes from "prop-types";

const Header = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        bgGradient="to-r"
        gradientFrom="cyan.400"
        gradientTo="blue.500"
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading marginLeft={"10"}>FinProH8</Heading>
        </Box>
        <Box display={"flex"} padding={"5"}>
          <ColorModeButton variant={"surface"} size={"sm"} marginRight={2} />
          <Input
            placeholder="Search.."
            size={"sm"}
            color={"black"}
            bgColor={"white"}
            border={"none"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
          <Button
            marginLeft={"2"}
            bgColor={"black"}
            color={"white"}
            size={"sm"}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </>
  );
};
Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
